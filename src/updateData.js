const dbConnection=require('./db/connectDb')

const updateData=async ()=>{
    let data=await dbConnection()
    let result =await data.updateOne(
        {name:'multi2' },
        {$set:{name:'multi2',newfield:"this is added fie"}}
        )
    console.log(result)
}
updateData()