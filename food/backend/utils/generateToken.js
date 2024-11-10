const jwt = require("jsonwebtoken");

const generateToken = (user)=>{
    return jwt.sign({email : user.email , id: user._id } ,"lkasjfkjaskdjhganmvasfa"  ,{expiresIn : '10h'});
};

module.exports.generateToken = generateToken ;


// process.env.JWT__KEY