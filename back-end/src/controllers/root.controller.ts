import { Request, Response } from "express"
import {
  lowestSpentCategoryService,
  topSpentCategoriesService,
  mostUsedMethodService,
  lessUsedMethodService,
  totalSpentService,
  totalIncomeService,
  totalInvestmentService,
  biggestIncomeSourceService,
  totalTransactionsService,
  firstUserNameService,
} from "../services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesService()

  const lowestSpentCategory = await lowestSpentCategoryService()

  const mostUsedMethod = await mostUsedMethodService()

  const lessUsedMethod = await lessUsedMethodService()

  const totalSpent = await totalSpentService()

  const totalIncome = await totalIncomeService()

  const totalInvestment = await totalInvestmentService()

  const biggestIncomeSource = await biggestIncomeSourceService()

  const totalTransactions = await totalTransactionsService()

  const firstUserName = await firstUserNameService()

  return res.render("index", {
    topSpentCategories,
    lowestSpentCategory,
    mostUsedMethod,
    lessUsedMethod,
    totalSpent,
    totalIncome,
    totalInvestment,
    biggestIncomeSource,
    totalTransactions,
    firstUserName,
  })
}

export { rootController }
