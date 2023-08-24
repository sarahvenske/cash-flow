import "express-async-errors"
import express, { Application } from "express"
import path from "path"
import { handleErrors } from "./errors"
import { rootRouters } from "./routers/root.routers"

const app: Application = express()
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))
app.use(express.static("public"))

app.use("", rootRouters)

app.use(handleErrors)

export default app
