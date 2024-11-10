const Joi = require("joi");
const bcrypt  = require("bcrypt");
const userModel = require("../models/user_model");
const jwt = require("jsonwebtoken");
const {generateToken}  = require("../utils/generateToken");

const userSchema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

module.exports.registerUser = async function(req , res){
    try {

        const { error } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map((detail) => detail.message)
            });
        }

        let { email, password, fullname } = req.body;
        let user = await userModel.findOne({email: email});
        if(user){
            return res.status(401).send("You already have an account , please login");
        }
        bcrypt.genSalt(10,function (err,salt){
            bcrypt.hash(password , salt , async function (err , hash){
                if(err)  return res.send(err.message);
                else {
                    let createdUser = await userModel.create({ email,
                        password : hash ,
                        fullname 
                    });
                    let token = generateToken(createdUser); 
                    res.cookie("token" , token);
                    res.send("user crated successfully");
                    // res.status(201).send(createdUser);
                }
            });
        });
 
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
}

module.exports.loginUser = async function(req , res){

    let {email , password } = req.body ;
    console.log(password);
    let user = await userModel.findOne({ email : email});
    console.log(user);
    if(!user) return res.send("Email or Password incorrect 1");

    bcrypt.compare(password , user.password , function (_err , result ){
        if(result){
            let token = generateToken(user);
            res.cookie("token" , token);
            res.send("you can login");
        }
        else{
            res.send("Email or Password incorrect");
        }
    })
}
