const mongoose =require('mongoose')
const connectDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com")
}
module.exports=connectDb;