import mongoose from "mongoose";

const postschema = mongoose.Schema({
  myFile: String,
  name: String,
  description: String,
  company: String,
  year: Number,
  price: Number,
  engine: String,         // موتور
  horsepower: Number,     // اسب بخار
  seating: Number,        // ظرفیت صندلی
  transmission: String,   // گیربکس
  fuelType: String,       // نوع سوخت
  color: String,          // رنگ
  availableFrom: String,  // زمان شروع دسترسی
  availableTo: String     // زمان پایان دسترسی
});

export default mongoose.models.posts || mongoose.model('post', postschema);
