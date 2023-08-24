import { AppDataSource } from "../data-source"
import { User } from "../entities"

const transactionsUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  })

  return user!
}

export { transactionsUserService }
