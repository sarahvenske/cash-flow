import { Request, Response } from "express";
import { listTopCategoriesServices } from "../services/listTopCategories.services";

const listTopCategoriesController = async (req: Request, res: Response) => {
  const topCategories = await listTopCategoriesServices();
  // return res.status(200).json(topCategories);
  return res.render("index", { topCategories });
};

export { listTopCategoriesController };
