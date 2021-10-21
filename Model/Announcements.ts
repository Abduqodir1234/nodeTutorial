import { model, Schema } from "mongoose";


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

let announecementSchema = new Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    location:pointSchema,
    image:{type:Array,required:true}
})

announecementSchema.index({location: '2dsphere'});

let Announcements = model("Announcements",announecementSchema)

export default Announcements;