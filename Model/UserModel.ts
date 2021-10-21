import { model, Schema,Decimal128 } from "mongoose";


const pointSchema = new Schema({
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
  
let users_schema = new Schema({
    fullName:{type:String,required:true},
    birthday:{type:Date,required:true},
    gender:{type:Number,required:true},
    location:pointSchema,
    phone:{type:String,required:true,unique:true}
})
users_schema.index({location: '2dsphere'});

let User = model("Users",users_schema)

export default User;