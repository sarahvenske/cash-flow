import { Router } from "express";
import { listTopCategoriesController } from "../controllers";

const categoryRouters: Router = Router();

categoryRouters.get("/top_categories", listTopCategoriesController);

export { categoryRouters };
