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
  })
}

export { rootController }
