const {Admin} = require("../database/index.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports.createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });
  };


  module.exports.signIn = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.status(200).json({message:'All fields are required'})
      }

      const user = await Admin.findOne({ email });
      if(!user){
        return res.status(201).json({message:'Incorrect password or email' }) 
      }
      
    
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }

       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }