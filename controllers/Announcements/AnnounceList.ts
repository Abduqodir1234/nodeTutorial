import { Request, Response } from "express";
import Announcements from "../../Model/Announcements";
import User from "../../Model/UserModel";

let AnnounceList = async (req:any,res:Response)=>{
    let username:any = req?.user?.username
    let user:any =  await User.findOne({fullName:username})
    console.log(user.location);
    
    let announcements = await Announcements.find({location:{$near:{$geometry:user.location}}})
    res.send(announcements)

}
export default AnnounceList;