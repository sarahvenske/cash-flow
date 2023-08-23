import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalIncomeService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalIncome = await transactionRepository
    .createQueryBuilder("t")
    .select("ROUND(SUM(t.value)::numeric, 0)", "total_income")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("c.name = :includedCategory", { includedCategory: "Income" })
    .andWhere("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })
    .getRawOne()

  return totalIncome ? parseFloat(totalIncome.total_income) : 0
}

export { totalIncomeService }
