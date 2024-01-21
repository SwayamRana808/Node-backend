const dbConnection =require('./db/connectDb')

const deleteData=async ()=>{
    let data =await dbConnection()
    let result=await data.deleteOne({name:undefined})
    console.log(result)
}
deleteData()