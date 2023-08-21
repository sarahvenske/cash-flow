import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalSpentService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const excludedCategories = await categoryRepository.find({
    where: [{ name: "Income" }, { name: "Investments" }],
  })

  const transactionRepository = AppDataSource.getRepository(Transaction)

  const queryBuilder = await transactionRepository
    .createQueryBuilder("t")
    .select("SUM(t.value)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")

  if (excludedCategories.length) {
    const excludedCategoryIds = excludedCategories.map(
      (category) => category.id
    )
    queryBuilder.where("t.categoryId NOT IN (:...excludedCategoryIds)", {
      excludedCategoryIds: excludedCategoryIds,
    })
  }

  const totalSpent = await queryBuilder.getRawOne()

  return totalSpent ? parseFloat(totalSpent.total_spent) : 0
}

export { totalSpentService }
