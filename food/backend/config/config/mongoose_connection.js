const mongoose = require('mongoose');

const dbgr = require("debug")("development : mongoose");      // environment varialble  $env:NODE_ENV = "development"
   
const config = require("config");

mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(function(){
        dbgr("connected");
    })
    .catch(function(err){
        dbgr(err);
    })

module.exports = mongoose.connection;