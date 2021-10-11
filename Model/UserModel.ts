import { model, Schema } from "mongoose";

let users_schema = new Schema({
    fullName:{type:String,required:true},
    password:{type:String,required:true}
})

let Blog = model("Users",users_schema)

export default Blog;