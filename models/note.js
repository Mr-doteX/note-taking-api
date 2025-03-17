// import mongoose
import mongoose, { Schema } from "mongoose";

// adding a schema... you can have multiple schemas here
const noteSchema = new Schema({
  title: {
    type: String,
    lowercase: true,
  },
  body: {
    type: String,
  },
  date:{
    type:String,
    default:Date.now()

  }
},{timestamps:true});

//  export to controller
export const Note = mongoose.model('note',noteSchema)