const mongoose =require('mongoose')
const connectDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com")
}
const ProductSchema=new mongoose.Schema(
    {
        name:String,
        price:Number
    });

const Update=async ()=>{
   
    await connectDb()
    const productsModel=mongoose.model('products',ProductSchema)
    let data=await productsModel.updateOne(
        {name:"m8"},
        {$set:{price:837}})

    console.log(data)

}

const deleteData=async ()=>{
   
    await connectDb()
    const productsModel=mongoose.model('products',ProductSchema)
    let data=await productsModel.deleteOne(
        {name:"m8"}
         )

    console.log(data)

}
const ReadData=async ()=>{
   
    await connectDb()
    const productsModel=mongoose.model('products',ProductSchema)
    let data=await productsModel.find({})

    console.log(data)

}

ReadData()