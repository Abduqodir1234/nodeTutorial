import {Request,Response} from "express"

let LoginController = (req:Request,res:Response)=>{
    let context = {
        "page_title":"ExpressJs | Login"
    }
    res.render("user/user",context)
}
export default LoginController;