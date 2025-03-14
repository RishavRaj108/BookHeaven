import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword =await bcryptjs.hash(password , 10);
    const createdUser = new User({
      fullname,
      email,
      password:hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created Succesfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const login = async (req,res) =>{
  try {
    const {email , password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcryptjs.compare(password , user.password);
    if(!user || !isMatch){
      res.status(400).json({ message: "Invalid Username and Password"});
    }else{
      res.status(200).json({
        message: "Login Successfull",
        user:{
          _id : user._id,
          fullname : user.fullname,
          email : user.email
        }
      })
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
}