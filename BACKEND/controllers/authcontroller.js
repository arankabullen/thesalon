/***
 * Author: Aranka Bullen
 *
 * methods:
 */
import {User} from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";


const register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const hashedPassword = await bcrypt(password, 10);
    const user = await User.create({
      name,
      email,  
      password: hashedPassword,
      phone,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
};

const login = async (req, res) => {
    const {email, password} = req.body;
  try {
    const user = await User.findOne({where: email});
    if(!user){
        res.status(404).json({message:"User not found"});
    }
    const isFound= await bcrypt.compare(password, user.password)
    if(!isFound){
        res.status(400).json({message:"Password incorrect"});
    }
    const token = jwt.sign({id: user.userID}, process.env.JWT_SECRET, {expiresIn: '2h'});

    res.status(200).json({token, user});
  } 
  catch(error) {
        res.status(400).json({message:" Error logging in", error});
  }
};

const googleLogin = passport.authenticate('google', {scope: ['profile', 'email']});

const googleCallback = (req, res) => {
    passport.authenticate('google', {session: false}, (err, user, info) => {
        if(err || !user){
            res.status(400).json({message: "Unable to login in to Google account", err});
        }
        const token = jwt.sign({id:user.userID}, process.env.JWT_SECRET, {expiresIn: "2h"});
        res.status(201).json({token, user});
    })
    (req, res);
}

export {register, login, googleLogin, googleCallback};
