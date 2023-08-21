import { Request, Response } from "express"
import { topSpentCategoriesServices } from "../services"

const topSpentCategoriesController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesServices()
  return res.render("index", { topSpentCategories })
}

export { topSpentCategoriesController }
