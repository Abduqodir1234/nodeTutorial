import {Router} from "express"
import LoginController from "../controllers/UserRoutes/login";
import RegisterController from "../controllers/UserRoutes/RegisterController";
import RegisterFormController from "../controllers/UserRoutes/RegisterFormSubmit";
 

let UserRouter = Router()


 UserRouter.post("/register/form/submit", function(req, res) {
    var name = req.body.fullname;
    console.log(name);
       
})

export default UserRouter;