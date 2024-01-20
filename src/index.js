const express =require('express');
const app=express() //to execute 

app.get('',(req,res)=>{
    console.log(req.query.name)
    res.send(`hello this is home page ${req.query.name}`) //runs http://localhost:3000/?name=peter
})

app.get('/about',(req,res)=>{
    res.send('hello this is about page')
 })
 
app.listen(2000)