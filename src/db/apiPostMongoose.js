const mongoose =require('mongoose')
const express=require('express')
const dbConnection=require('./config');
const Productmodel=require('./productsModel')
const app=express()
app.use(express.json())

app.post("/create",async (req,res)=>{
  await Insert(req.body)
  res.send("done")
})
app.get('/',async(req,res)=>{
    let data=await read()
    await read().then((r)=>{console.log(r)}) //you cannot write data.then()
    res.send(data)
})
app.delete('/delete/:_id',async(req,res)=>{
    let data=await deleteData(req.params)
     console.log(data)
    res.send(data)
})
app.put('/update/:_id',async (req,res)=>{
    let data=await updateData(req.params,req.body)
    console.log(data)
    res.send(data)
})

const Insert=async (input)=>{
    await  dbConnection()
    let data=await Productmodel.create(input) //insertMany and create automatically saves data and there is not insertOne here.
    //or
    // let data=new Productmodel(input)
    // let result=await data.save()
    
    console.log(data)
}
const read=async ()=>{
  await dbConnection()
  let data=await Productmodel.find()
  return data;
}

const deleteData=async(params)=>{
    await dbConnection()
    let data =await Productmodel.deleteOne(params)
    
    return data
}
const updateData=async(params,namesend)=>{
    await dbConnection()
    let data =await Productmodel.updateOne(
     params,
     {$set:namesend})
    return data
}
app.listen(2000);
