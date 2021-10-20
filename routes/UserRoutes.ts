import {Router} from "express"
import CodeHandler from "../controllers/UserRoutes/CodeHandle";
import LoginController from "../controllers/UserRoutes/login";
import RegisterController from "../controllers/UserRoutes/RegisterController";
 

let UserRouter = Router()
UserRouter.post("/register",RegisterController)
UserRouter.post("/verify",LoginController)
UserRouter.post("/verify/code",CodeHandler)
export default UserRouter;