import { Router } from "express"
import { rootController } from "../controllers/root.controller"

const rootRouters: Router = Router()

rootRouters.get("/rewind/:user_id", rootController)

export { rootRouters }
