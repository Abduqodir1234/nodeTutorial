import {Request,Response} from "express"
let RegisterController =  (req:Request,res:Response)=>{
    console.log(req.body);
    
    let context = {
        "page_title":"Register",
    }
    res.render("user/register",context)
}
export default RegisterController;