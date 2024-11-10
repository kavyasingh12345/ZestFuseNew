const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : String ,
    email : String ,
    password : String ,
    // isadmin : {
    //     type : Array,
    //     default : []
    // },
    // orders : {
    //     type : Array,
    //     default : []
    // },
    // contact : Number,

})

module.exports = mongoose.model("user",userSchema);