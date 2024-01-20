const express =require('express');
const app=express() //to execute 
const middleware=require('./exportMiddleware')


const route=express.Router();
route.use(middleware)
 

const reqFilter3=(req,res,next)=>{
    if((!req.query.age)){
        res.send("please provide age")
    }
    else if(req.query.age < 10 ){
        res.send("please provide age")
    }
    else{
        // res.send("after next") it will cancel further route and page will not its content else it will load send data;
         next() //without next routes will not load
        
    }
    console.log('reqFilter')
    
}
app.use(reqFilter3)

//middleware for each route
const reqFilter=(req,res,next)=>{
    if(req.params.id===undefined){
        res.send("please provide number")
    }
    else if(req.params.id==100){
         res.send("help 100 ")
    }
    else if(req.params.id==1){
        next('route')
    }
    else{
        // res.send("after next") it will cancel further route and page will not its content else it will load send data;
        console.log("this is first middle") 
        next() //without next routes will not load
        
    }
    
    
}
//second middleware
const reqFilter2=(req,res,next)=>{
    if(req.params.id===undefined){
        res.send("please provide number")
    }
    else if(req.params.id==100){
         res.send("help 100 ")
    }
    else if(req.params.id==1){
         next()
    }
    else{
        // res.send("after next") it will cancel further route and page will not its content else it will load send data;
        console.log("this is second middle")
        next() //without next routes will not load
        
    }
     
    
}
app.get('',(req,res)=>{
    console.log(req.query.age)
    res.send(`hello this is home page ${req.query.age}`) //runs http://localhost:3000/?name=peter
})

app.get('/about',(req,res)=>{
    res.send('hello this is about page')
 })

 app.get('/help/:id?',reqFilter,reqFilter2,(req,res)=>{
    res.send('hello this is help page')
 })
 app.get('/help/:id?' ,(req,res)=>{ //this will run when //help/1
    res.send(' special')
 })
 route.get('/contact' ,(req,res)=>{ //this will run when //help/1
    res.send('import middleware')
 })

 app.use(route)
app.listen(3000)