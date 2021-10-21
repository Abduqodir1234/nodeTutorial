import { Request, Response } from "express";
import Announcements from "../../Model/Announcements";

let Announce_lists = async (req:Request,res:Response)=>{
    console.log(req.body);
    if(req?.body?.images?.length === 0 || typeof req?.body?.images === "undefined"){
        res.send({"error":true,"message":"Please upload image"})
    }
    else{
        let announcement = await new Announcements({
            name:req.body.name,
            price:req.body.price,
            location:{type:"Point",coordinates:req.body.coordinates},
            image:req?.body?.images
        })
        await announcement.save()
        .then(()=>{
            res.status(200).send({"error":false,"message":"Successfully created"})
        })
        .catch(e=>{
            res.status(404).send({"error":true,"message":e})
        })
    }
}
export default Announce_lists;