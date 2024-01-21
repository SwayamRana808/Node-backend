const dbConnection =require('./db/connectDb')
const express=require('express')
const mongodb=require('mongodb')
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
app.put('/:name?',async (req,res)=>{
    console.log(req.body)
    let db=await dbConnection()
    let result=await db.updateOne({name:req.params.name},{$set:req.body})
    res.send(result)
})
app.delete('/:id?',async (req,res)=>{
    console.log(req.body)
    let db=await dbConnection()
    let result=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(`<h1>${JSON.stringify(result)}</h1>`)
    console.log(result)
})
app.listen(4000)