const fs=require('fs')
// fs.writeFileSync('apple.txt','this is a apple file')
const path=require('path')
const dirpath=path.join(__dirname,'files');
const dirpath2=__dirname+"\\files"; //using double \\ as js recognised it special symbol or u can use / also
for(let i=0;i<5;i++){
    fs.writeFileSync(`${dirpath2}/hello${i}.txt`,"a simple text file")
}
console.log("end",dirpath2);