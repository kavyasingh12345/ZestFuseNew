const express = require('express');
const router = express.Router();
const Joi = require("joi");
const ownerModel = require("../models/owner_model");


const ownerSchema = Joi.object({
    canteen_name: Joi.string().required(),
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

if(process.env.NODE_ENV == "development"){
    router.post("/create",async function (req,res){
        let owners = await ownerModel.find();
        if(owners.length > 2) {
         return res
             .status(500)
             .send("You don't have permission to create a new owner .");
         } 
        try {
            const { error } = ownerSchema.validate(req.body);
            if (error) {
                return res.status(400).json({
                    message: "Validation error",
                    details: error.details.map((detail) => detail.message)
                });
            }
    
            let { canteen_name , email, password, fullname } = req.body;
            let createdOwner = await ownerModel.create({ canteen_name ,email, password, fullname });
            res.status(201).send(createdOwner);
        } catch (err) {
            console.log(err.message);
            res.status(500).send({ message: "Internal server error", error: err.message });
        }
    });
}


router.get("/" , function(req , res){
    res.send("hey it's working");
})

console.log(process.env.NODE_ENV);      //$env:NODE_ENV = "development"


module.exports = router ;
