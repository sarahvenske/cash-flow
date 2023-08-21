import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const lowestSpentCategoryService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const incomeCategory: Category | null = await categoryRepository.findOne({
    where: { name: "Income" },
  })
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const queryBuilder = transactionRepository
    .createQueryBuilder("t")
    .select("c.name", "category_name")
    .addSelect("SUM(t.value)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .groupBy("c.name")
    .orderBy("total_spent", "ASC")
    .limit(1)

  if (incomeCategory) {
    queryBuilder.where("t.categoryId != :excludedCategoryId", {
      excludedCategoryId: incomeCategory.id,
    })
  }
  const lowestSpentCategories = await queryBuilder.getRawOne()

  return lowestSpentCategories
}

export { lowestSpentCategoryService }
