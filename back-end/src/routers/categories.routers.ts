import { Router } from "express"
import { topSpentCategoriesController } from "../controllers"

const categoryRouters: Router = Router()

categoryRouters.get("/top_spent", topSpentCategoriesController)

export { categoryRouters }
