import mongoose, { Schema } from "mongoose";

const bookScheme = new Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Book = mongoose.model("Book",bookScheme);
export default Book;