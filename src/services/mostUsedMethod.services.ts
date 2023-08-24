import { AppDataSource } from "../data-source"
import { Transaction, Method, User } from "../entities"

const mostUsedMethodService = async (user: User) => {
  const transactionRepository = AppDataSource.getRepository(Transaction)

  const mostUsedMethod = await transactionRepository
    .createQueryBuilder("t")
    .select("m.name", "method_name")
    .addSelect("COUNT(t.methodId)", "method_count")
    .innerJoin(Method, "m", "t.methodId = m.id")
    .where("t.userOriginId = :userId", { userId: user.id })
    .andWhere("EXTRACT(YEAR FROM t.date) = :year", { year: 2022 })
    .groupBy("m.name")
    .orderBy("method_count", "DESC")
    .limit(1)
    .getRawOne()

  return mostUsedMethod
}

export { mostUsedMethodService }
