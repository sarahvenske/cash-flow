import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { faker } from "@faker-js/faker"

export const createUserSeeder = async (): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = userRepository.create({
    name: faker.person.fullName(),
    email: faker.internet.email({ provider: "mail.com" }),
    password: faker.internet.password(),
    accountNumber: faker.finance.accountNumber(10),
    createdAt: new Date(),
    isCompany: faker.datatype.boolean(),
  })

  return await userRepository.save(user)
}
