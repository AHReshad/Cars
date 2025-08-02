import mongoose from "mongoose";

const postschema = mongoose.Schema({
    myFile : String,
    name : String,
    description : String,
    company: String,       // شرکت سازنده
  year: Number,          // سال ساخت
  price: Number
})

export default mongoose.models.posts || mongoose.model('post', postschema)