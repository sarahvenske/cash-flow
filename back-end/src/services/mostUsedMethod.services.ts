import { AppDataSource } from "../data-source"
import { Transaction, Method } from "../entities"

const mostUsedMethodService = async () => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const mostUsedMethod = await transactionRepository
    .createQueryBuilder("t")
    .select("m.name", "method_name")
    .addSelect("COUNT(t.methodId)", "method_count")
    .innerJoin(Method, "m", "t.methodId = m.id")
    .groupBy("m.name")
    .orderBy("method_count", "DESC")
    .limit(1)
    .getRawOne()

  return mostUsedMethod
}

export { mostUsedMethodService }
