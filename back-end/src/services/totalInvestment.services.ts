import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalInvestmentService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalInvestment = await transactionRepository
    .createQueryBuilder("t")
    .select("SUM(t.value)", "total_investment")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("c.name = :includedCategory", { includedCategory: "Investments" })
    .getRawOne()

  return totalInvestment ? parseFloat(totalInvestment.total_investment) : 0
}

export { totalInvestmentService }
