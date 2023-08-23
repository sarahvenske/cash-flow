import { AppDataSource } from "../data-source"
import { Transaction } from "../entities"

const totalTransactionsService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalTransactions = await transactionRepository
    .createQueryBuilder("t")
    .select("count(t.id)", "total_transactions")
    .where('EXTRACT(YEAR FROM t."date") = :year', { year: 2022 })
    .getRawOne()

  return totalTransactions
}

export { totalTransactionsService }
