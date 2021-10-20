import { model, Schema } from "mongoose";

let users_schema = new Schema({
    fullName:{type:String,required:true},
    birthday:{type:Date,required:true},
    gender:{type:Number,required:true},
    province_id:{type:Number,required:true},
    city_id:{type:Number,required:true},
    phone:{type:String,required:true,unique:true}
})

let User = model("Users",users_schema)

export default User;