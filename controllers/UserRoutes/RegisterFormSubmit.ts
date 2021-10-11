import {Request,Response} from "express"
let RegisterFormController = (req:Request,res:Response)=>{
    console.log(req);
    res.redirect("/user/register")
}
export default RegisterFormController;