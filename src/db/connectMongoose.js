const mongoose =require('mongoose')
const Insert=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com") ///e-com name of database 
    const ProductSchema=new mongoose.Schema(
    {
        name:String,
        price:Number
    });
    const productsModel=mongoose.model('products',ProductSchema) //products name of collection
    let data=new productsModel({name:"m8",price:100})
    let result=await data.save()
    console.log(result)

}


Insert()