const express=require('express')

const EventEmitter=require('events')
const event=new EventEmitter()
const app = express()
let count=0;
event.on("countApi",()=>{
    count++;
    console.log("event called",count)
})
app.get('/',(req,res)=>{
 res.send("api called")
 event.emit("countApi")
})
app.listen(2000)