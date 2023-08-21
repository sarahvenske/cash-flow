import { Request, Response } from "express"
import {
  lowestSpentCategoryService,
  topSpentCategoriesServices,
} from "../services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesServices()

  const lowestSpentCategory = await lowestSpentCategoryService()

  return res.render("index", { topSpentCategories, lowestSpentCategory })
  //   return res.status(200).json(lowestSpentCategory)
}

export { rootController }
