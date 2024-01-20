const express =require('express');
const path=require('path')
const publicPath=path.join(__dirname,'public')
const app=express() //to execute 

// app.use(express.static(publicPath))
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})
app.listen(2000)