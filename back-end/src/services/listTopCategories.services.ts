import { AppDataSource } from "../data-source";
import { Category, Transaction } from "../entities";

const listTopCategoriesServices = async (): Promise<any> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const incomeCategory = await categoryRepository.findOne({
    where: { name: "Income" },
  });
  if (!incomeCategory) throw new Error("Category 'income' not found.");

  const transactionRepository = AppDataSource.getRepository(Transaction);
  const topCategories = await transactionRepository
    .createQueryBuilder("t")
    .select("c.name", "category_name")
    .addSelect("SUM(t.value)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("t.categoryId != :excludedCategoryId", {
      excludedCategoryId: incomeCategory.id,
    })
    .groupBy("c.name")
    .orderBy("total_spent", "DESC")
    .limit(5)
    .getRawMany();

  return topCategories;
};

export { listTopCategoriesServices };
