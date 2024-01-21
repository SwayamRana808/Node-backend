const dbConnection =require('./db/connectDb')
const express=require('express')
const app=express()

app.get('/',async (req,res)=>{
    let db=await dbConnection()
    let data=await db.find({}).toArray()
    res.send({name:"swayam","data":data})

})
app.listen(4000)