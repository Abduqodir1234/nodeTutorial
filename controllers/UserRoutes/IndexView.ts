import { Request, Response } from "express";
let verifyToken = require("../components/verifyToken")
let IndexView = async (req:Request,res:Response,next:any)=>{
    res.send({"user":"Salom"})
}
export default IndexView;