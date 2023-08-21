import { AppDataSource } from "../data-source"
import { Category, Transaction } from "../entities"

const totalSpentService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const totalSpent = await transactionRepository
    .createQueryBuilder("t")
    .select("SUM(t.value)", "total_spent")
    .innerJoin(Category, "c", "t.categoryId = c.id")
    .where("c.name != :excludedCategory", { excludedCategory: "Income" })
    .getRawOne()

  return totalSpent ? parseFloat(totalSpent.total_spent) : 0
}

export { totalSpentService }
