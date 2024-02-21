const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUsers=async(req,res)=>{
   
        const users=await User.find()
        res.status(200).json(users)
    
}

const addNewUser=async(req,res)=>{
    try {
        const data=req.body
     const hashedPassword=await bcrypt.hash(data.password, saltRounds);
    
     const user= await new User({
        name:data.name,
        email:data.email,
        password:hashedPassword
     })
     await user.save()

     const userResponse=user.toObject(); //convert mongoose doc to plain js object
    delete userResponse.password; //now encrypted password will not come to front end
    res.status(201).json(userResponse)
        
    } catch (error) {
        console.log(error)
        res.status(400).send("error occured")
    }
}

const loginUser=async(req, res) => {
    const data=req.body
    const user=await User.findOne({email:data.email}) //check if email is signedup

    if(!user){
      return res.status(404).send("user not found!")
    }

    const passwordMatch=bcrypt.compareSync(data.password, user.password) //check if password is matched

    if(!passwordMatch){
      return res.status(401).send("wrong password!")
    }
    const token=jwt.sign({name:user.name,id:user.id},process.env.TOKEN_SECRET)
    
    res.cookie('token',token,{httpOnly: true,withCredentials: true})

    res.status(200).send("Login Succesfull")
   }

   const logoutUser=async(req,res)=>{
    res.clearCookie('token')
    res.send("Logged out")


   }

   


module.exports={getAllUsers,addNewUser,loginUser,logoutUser}