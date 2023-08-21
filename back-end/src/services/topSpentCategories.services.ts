import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const topSpentCategoriesService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const excludedCategories = await categoryRepository.find({
    where: [{ name: "Income" }, { name: "Investments" }],
  })

  const transactionRepository = AppDataSource.getRepository(Transaction)

  const queryBuilder = transactionRepository
    .createQueryBuilder("t")
    .select("c.name", "category_name")
    .addSelect("SUM(t.value)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .groupBy("c.name")
    .orderBy("total_spent", "DESC")
    .limit(5)

  if (excludedCategories.length) {
    const excludedCategoryIds = excludedCategories.map(
      (category) => category.id
    )
    queryBuilder.where("t.categoryId NOT IN (:...excludedCategoryIds)", {
      excludedCategoryIds: excludedCategoryIds,
    })
  }

  const topSpentCategories = await queryBuilder.getRawMany()

  return topSpentCategories
}

export { topSpentCategoriesService }
