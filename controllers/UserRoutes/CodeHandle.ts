import  {Request,Response} from "express"
import jwt from "jsonwebtoken"
import User from "../../Model/UserModel";
import { accessTokenSecret } from "../components/Variables";
const codehandler = require('../components/codehandler');
let CodeHandler = async (req:Request,res:Response)=>{    
    let codehandle2:any = await codehandler(req?.body?.code,req?.body?.phone)
    let one:any = await User.find({phone:req.body.phone})
    if(codehandle2){
       const token = await jwt.sign({username:one[0].fullName},accessTokenSecret,{expiresIn:"30d"})
       res.json({"error":false,"token":token,"type":"Bearer"})
    }
    else{
        res.send({"error":true,"message":"Code is incorrect"})
    }
}
export default CodeHandler