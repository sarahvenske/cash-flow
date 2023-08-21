import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalIncomeService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalIncome = await transactionRepository
    .createQueryBuilder("t")
    .select("SUM(t.value)", "total_income")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("c.name = :includedCategory", { includedCategory: "Income" })
    .getRawOne()

  return totalIncome ? parseFloat(totalIncome.total_income) : 0
}

export { totalIncomeService }
