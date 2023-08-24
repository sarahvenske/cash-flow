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
  transactionsUserService,
  aiInsightsServices,
} from "../services"

const rootController = async (req: Request, res: Response) => {
  const userId: string = req.params.user_id

  const user = await transactionsUserService(userId)

  const topSpentCategories = await topSpentCategoriesService(user)

  const lowestSpentCategory = await lowestSpentCategoryService(user)

  const mostUsedMethod = await mostUsedMethodService(user)

  const lessUsedMethod = await lessUsedMethodService(user)

  const totalSpent = await totalSpentService(user)

  const totalIncome = await totalIncomeService(user)

  const totalInvestment = await totalInvestmentService(user)

  const biggestIncomeSource = await biggestIncomeSourceService(user)

  const totalTransactions = await totalTransactionsService(user)

  const aiInsights = await aiInsightsServices()

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
    aiInsights,
    user,
  })
}

export { rootController }
