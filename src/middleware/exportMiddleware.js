const middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else{
        // res.send("after next") it will cancel further route and page will not its content else it will load send data;
         next() //without next routes will not load
        
    }
    console.log('reqFilter')
    
}
module.exports=middleware;