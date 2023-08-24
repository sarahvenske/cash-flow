import { AppDataSource } from "../data-source"
import { Category, Transaction, User } from "../entities"

const totalSpentService = async (user: User) => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const excludedCategories = await categoryRepository.find({
    where: [{ name: "Income" }, { name: "Investments" }],
  })

  const transactionRepository = AppDataSource.getRepository(Transaction)

  const queryBuilder = await transactionRepository
    .createQueryBuilder("t")
    .select("ROUND(SUM(t.value)::numeric, 0)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("t.userOriginId = :userId", { userId: user.id })
    .andWhere("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })

  if (excludedCategories.length) {
    const excludedCategoryIds = excludedCategories.map(
      (category) => category.id
    )
    queryBuilder.andWhere("t.categoryId NOT IN (:...excludedCategoryIds)", {
      excludedCategoryIds: excludedCategoryIds,
    })
  }

  const totalSpent = await queryBuilder.getRawOne()

  return totalSpent ? parseFloat(totalSpent.total_spent) : 0
}

export { totalSpentService }
