const mongoose = require("mongoose");

const connectDb = ()=>{
    return mongoose.connect("mongodb+srv://hindustantimes:123hindustan@cluster0.yy8fs.mongodb.net/hindustantimes");
}

module.exports=connectDb;

