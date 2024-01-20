const express =require('express');
const app=express() //to execute 

//middleware for each route
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else{
        // res.send("after next") it will cancel further route and page will not its content else it will load send data;
         next() //without next routes will not load
        
    }
    console.log('reqFilter')
    
}
app.use(reqFilter)
app.get('',(req,res)=>{
    console.log(req.query.age)
    res.send(`hello this is home page ${req.query.age}`) //runs http://localhost:3000/?name=peter
})

app.get('/about',(req,res)=>{
    res.send('hello this is about page')
 })
 
app.listen(3000)