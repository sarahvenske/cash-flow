import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const lowestSpentCategoryService = async () => {
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
    .where("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })
    .groupBy("c.name")
    .orderBy("total_spent", "ASC")
    .limit(1)

  if (excludedCategories.length) {
    const excludedCategoryIds = excludedCategories.map(
      (category) => category.id
    )
    queryBuilder.andWhere("t.categoryId NOT IN (:...excludedCategoryIds)", {
      excludedCategoryIds: excludedCategoryIds,
    })
  }

  const lowestSpentCategories = await queryBuilder.getRawOne()

  return lowestSpentCategories
}

export { lowestSpentCategoryService }
