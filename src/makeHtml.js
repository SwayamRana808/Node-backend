const express =require('express');
const path=require('path')
const publicPath=path.join(__dirname,'public')
const app=express() //to execute 

// app.use(express.static(publicPath)) -----using this u can use pages in public folder without get simply by ---/about.html in url
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