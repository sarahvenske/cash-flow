import { AppDataSource } from "../data-source"
import { User } from "../entities"

const firstUserNameService = async () => {
  const userRepository = AppDataSource.getRepository(User)

  const firstUser = await userRepository
    .createQueryBuilder("u")
    .select("SPLIT_PART(u.name, ' ', 1)", "u_firstName")
    .limit(1)
    .getRawOne()

  return firstUser ? firstUser.u_firstName : null
}

export { firstUserNameService }
