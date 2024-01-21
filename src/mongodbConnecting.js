 const dbConnection =require('./db/connectDb')
 
 dbConnection().then((res)=>{
    res.find({}).toArray().then((data)=>{ //toArray return promise
        console.log(data)
    })
 })

/* second method using async and await
 const main= async ()=>{
     let data=await dbConnection();
     let collection=await data.find({}).toArray();
     console.log(collection)
 }
 main()
 */