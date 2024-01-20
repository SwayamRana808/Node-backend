const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,"crud")
const filePath=`${dirPath}/apple.txt`;

fs.writeFileSync(`${dirPath}/apple.txt`,"this is apple file")

fs.readFile(filePath,'utf-8',(err,item)=>{ //
    console.log(item)
})
fs.appendFileSync(filePath,'appended text',(err)=>{
    if(!err) console.log("file is updated")
})
fs.renameSync(filePath,`${dirPath}/fruit.txt`,(err)=>{
     if(!err) console.log("file is renamed")
})
fs.unlinkSync(`${dirPath}/fruit.txt`)