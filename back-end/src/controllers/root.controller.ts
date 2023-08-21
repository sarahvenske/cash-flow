import { Request, Response } from "express"
import {
  lowestSpentCategoryService,
  topSpentCategoriesService,
  mostUsedMethodService,
  lessUsedMethodService,
  totalSpentService,
} from "../services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesService()

  const lowestSpentCategory = await lowestSpentCategoryService()

  const mostUsedMethod = await mostUsedMethodService()

  const lessUsedMethod = await lessUsedMethodService()

  const totalSpent = await totalSpentService()

  return res.render("index", {
    topSpentCategories,
    lowestSpentCategory,
    mostUsedMethod,
    lessUsedMethod,
    totalSpent,
  })
  //   return res.status(200).json(lowestSpentCategory)
}

export { rootController }
