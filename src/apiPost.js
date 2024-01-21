const dbConnection =require('./db/connectDb')
const express=require('express')
const app=express()

app.use(express.json())

app.get('/',async (req,res)=>{
    let db=await dbConnection()
    let data=await db.find({}).toArray()
    res.send({name:"swayam","data":data})

})
app.post('/',async (req,res)=>{
    console.log(req.body)
    let db=await dbConnection()
    let result=await db.insertOne(req.body)
    res.send(result)
})
app.listen(4000)