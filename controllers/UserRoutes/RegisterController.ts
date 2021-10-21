import {Request,Response} from "express"
import User from "../../Model/UserModel";
let RegisterController = async (req:Request,res:Response)=>{
    let data = req?.body;
    var newUser = new User({
        fullName:data?.fullName,
        birthday:data?.birthday,
        gender:data?.gender,
        location:{type:"Point",coordinates:req.body.coordinates},
        phone:data?.phone,
    });
    await newUser.save()
    .then(()=>{
        res.status(200).send({"errors":false,"message":"New user created"})
    })
    .catch(erro2r=>{
        if(erro2r?.keyValue){
            res.send({"errors":true,"message":`User with this phone number exists`})
        }
        else{
            res.send({"error":true,"message":erro2r})
        }
        res.status(404).send(erro2r)
    })
}
export default RegisterController;