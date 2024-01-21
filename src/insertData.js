const dbConnection =require('./db/connectDb')

const insert =async ()=>{
    const db=await dbConnection();
    const result=await db.insertOne(
        {name:'note',brand:"viv"})
    const manydata=await db.insertMany(
        [{name:'multi1',brand:"viva la trimp"},{name:'multi2',brand:"viva la two"}])
    console.log(result,manydata)
}
insert()