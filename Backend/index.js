import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import path from "path";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;
// Connect to mongoDb 
if (!URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDb");
} catch (error) {
  console.log("Eroor Occured", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute);


//Deployment
if(process.env.NODE_ENV === "production"){
   const dirPath = path.resolve();
   app.use(express.static("./Frontend/dist"));
   app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"))
   })
}

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});
