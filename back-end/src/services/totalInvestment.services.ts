import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalInvestmentService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalInvestment = await transactionRepository
    .createQueryBuilder("t")
    .select("ROUND(SUM(t.value)::numeric, 0)", "total_investment")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("c.name = :includedCategory", { includedCategory: "Investments" })
    .andWhere("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })
    .getRawOne()

  return totalInvestment ? parseFloat(totalInvestment.total_investment) : 0
}

export { totalInvestmentService }
