import { AppDataSource } from "../data-source"
import { Transaction, User } from "../entities"

const totalTransactionsService = async (user: User) => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalTransactions = await transactionRepository
    .createQueryBuilder("t")
    .select("count(t.id)", "total_transactions")
    .where("t.userOriginId = :userId", { userId: user.id })
    .andWhere('EXTRACT(YEAR FROM t."date") = :year', { year: 2022 })
    .getRawOne()

  return totalTransactions
}

export { totalTransactionsService }
