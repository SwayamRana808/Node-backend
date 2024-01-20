const http=require('http')
const data=require('../utils/data.js')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'app/json'});
    res.write(JSON.stringify(data)) //convert javascript object to json
    res.end();
}).listen(1230);