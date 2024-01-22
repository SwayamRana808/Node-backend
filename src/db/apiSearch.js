const mongoose =require('mongoose')
const express=require('express')
const dbConnection=require('./config');
const Productmodel=require('./productsModel')
const app=express()
app.use(express.json())
 
app.get('/:key',async(req,res)=>{
    let data=await read(req.params.key)
    
    res.send(data)
})
const read = async (namei) => {
    try {
      await dbConnection();
      let data = await Productmodel.find({
        
          "$or":[
            {"name":{$regex: namei}},
            {"price":{$regex:namei}}
          ]
        
      });
      return data;
    } catch (error) {
      console.error("Error in read function:", error);
      throw error; // Re-throw the error to propagate it up
    }
  };
  
 

app.listen(4000);
