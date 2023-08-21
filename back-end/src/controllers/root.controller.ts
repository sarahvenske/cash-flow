import { Request, Response } from "express"
import { topSpentCategoriesServices } from "../services"

const rootController = async (req: Request, res: Response) => {
  const topSpentCategories = await topSpentCategoriesServices()

  return res.render("index", { topSpentCategories })
}

export { rootController }
