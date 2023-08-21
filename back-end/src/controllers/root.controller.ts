import { Request, Response } from "express"
import {
  lowestSpentCategoryService,
  topSpentCategoriesServices,
  mostUsedMethodService,
  lessUsedMethodService,
} from "../services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesServices()

  const lowestSpentCategory = await lowestSpentCategoryService()

  const mostUsedMethod = await mostUsedMethodService()

  const lessUsedMethod = await lessUsedMethodService()

  return res.render("index", {
    topSpentCategories,
    lowestSpentCategory,
    mostUsedMethod,
    lessUsedMethod,
  })
  //   return res.status(200).json(lowestSpentCategory)
}

export { rootController }
