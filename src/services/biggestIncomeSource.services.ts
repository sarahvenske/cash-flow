import { AppDataSource } from "../data-source"
import { Category, Transaction, User } from "../entities"

const biggestIncomeSourceService = async (user: User) => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const biggestIncome = await transactionRepository
    .createQueryBuilder("t")
    .select(["t.destinationName AS name", "t.value AS income_value"])
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("t.userOriginId = :userId", { userId: user.id })
    .andWhere("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })
    .andWhere("c.name = :categoryName", { categoryName: "Income" })
    .orderBy("income_value", "DESC")
    .limit(1)
    .getRawOne()

  return biggestIncome
}

export { biggestIncomeSourceService }
