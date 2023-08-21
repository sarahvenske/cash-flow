import { Request, Response } from "express"
import {
  lowestSpentCategoryService,
  topSpentCategoriesServices,
} from "../services"
import { mostUsedMethodService } from "../services/mostUsedMethod.services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesServices()

  const lowestSpentCategory = await lowestSpentCategoryService()

  const mostUsedMethod = await mostUsedMethodService()

  return res.render("index", {
    topSpentCategories,
    lowestSpentCategory,
    mostUsedMethod,
  })
  //   return res.status(200).json(lowestSpentCategory)
}

export { rootController }
