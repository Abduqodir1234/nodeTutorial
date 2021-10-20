import {Request,Response} from "express"
import User from "../../Model/UserModel";
// import sendSMS from "../components/sendSMS";
let sendSMS = require("../components/sendSMS")
let LoginController = async (req:Request,res:Response)=>{
    let user:any
    if(!req?.body?.phone){
        res.send({"error":true,"message":"phone number is required"})
    }
    try{
        user = await User.find({phone:req.body.phone})        
        if(user.length !==0){
            let response1 = await sendSMS(user[0]?.phone)
            if(response1){
                res.send({"errors":false,"message":"sms is sent successfully"})
            }
            else{
                res.send({"errors":true,"message":"sms could not be sent successfully"})
            }
        } 
        else{
            res.send("Something wrong")
        }
    }
    catch{
        res.status(404).send("Could not find user by this phone number")
    }
}
export default LoginController;