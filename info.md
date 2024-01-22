>The built-in JavaScript JSON.stringify() method allows you to convert JavaScript objects to JSON format.

>Using the built-in JSON.parse() method, you can transform JSON data into a JavaScript object.

>Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.
-process.argv return file running file url and env url and other input we give in command line in an array.

>fs-file system inbuilt module in node to manipulate files -create delete etc-

>JavaScript is flexible in accepting both forward slashes and backslashes as path separators. However, when working with file systems, it's often a good practice to use the path.join method from the #<path> module in Node.js, as it automatically chooses the correct path separator for the platform.

>Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features.

>When you use res.send() or res.json() in Express.js to send a JavaScript object or an array containing JavaScript objects, Express automatically sets the Content-Type header to application/json and converts the JavaScript object(s) to a JSON string.

>app.use(express.static(publicPath)) 
-to load static files in path given in publicPath <http://localhost:2000/filename.hmtl> if no filename.html then it searches for index.html

>ejs(Embedded JavaScript templating.)-EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

<!-- <% 'Scriptlet' tag, for control-flow, no output        
<%= Outputs the value into the template (HTML escaped) 
<%- Outputs the unescaped value into the template     -->
-app.set('view engine','ejs')
-create <views folder> and put profile.ejs inside 
-app.get('/profile',(_,res)=>{
    const user={
        name:"swayam"
    }
    res.render('profile',{user}) //looks for profile.ejs file inside view
})

-profile.ejs file-
  html
  <body>
  <%- include('common/filename')%> //to include more ejs file filename.ejs
  <% jscode %> //to render js code
  <%= user.name %> //to render data
  </body>

-filename.ejs -
 -<nav><h1>header</h1></nav>

 >Middleware-Middleware functions are functions that have access to the request object, the response object, and the next function in the application's request-response cycle.Advantages of using middleware: Middleware can process request objects multiple times before the server works for that request. Middleware can be used to add logging and authentication functionality.'

 >types of middleware-
  1.application-level middleware
  2.Router-level middleware
  3.Error-handling middleware
  4.Built-in middleware
  5.Third-party middleware
  
 >app.use(middleware) will be applied to all routes even to route.get 

  >In Express, if you define multiple app.get() routes for the same path, the route that is defined first will take precedence. In other words, the order in which you define your routes matters.

  >for router level mdw-
   - app.get('/help/:id?',reqFilter,reqFilter2,(req,res)=>{  //? means it run for both help/ or help/something
    res.send('hello this is help page')
  })
  
  *order of middleware and get is important if u have multiple get with same route only top get will render
  *if u didnt put app.use(middleware) above get it will not implemented 
  ''
>const route=express.Router() //use route inplace of app like route.get() and also first define route.use(middleware) to apply middleware to route only not to app

route.use(middleware)
 app.use(route) or  app.use('/',route) 
> 'It means that any route or middleware defined within the route router will be accessible under the path specified by app.use(route).'


-----------------------------------------------------------------------------------------------------------------------------------------------
                                     connecting mongodb (npm i mongodb)
>const {MongoClient} =require('mongodb')
const url='mongodb://localhost:27017';
const client=new MongoClient(url)

async function getData(){
    let result=await client.connect()
    let db=result.db('e-com')
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response);
}
getData()

''#If acknowledged is true , it means the MongoDB server has acknowledged the write concern. If false , it means the write concern is not enabled. The MongoDB server will still write data, but there's' no guarantee that data will persist on the disk.
'
---------------------------------------------------------------------------------------------------------------------------------------------------
'
>inserting data in mongo
-db=db.collection('products')
-insert() dont work now
-const result=await db.insertOne(
        {name:'note',brand:"viv"})
-const manydata=await db.insertMany(
        [{name:'multi1',brand:"viva la trimp"},{name:'multi2',brand:"viva la two"}])
*if data get inserted (result/manydata.acknowledged==true)

-----------------------------------------------------------------------------updateing data------------------------------------------------------

- let result =await db.updateOne(
        {name:'multi1' },
        {$set:{name:'multiUpdate1',more:"values"}}
        )
we also have updateMany() as in updateOne only top most matched data is updated 
-result gives ModifiedCount:0/1/2.. to check if modified

---------------------------------------------------------------------deleting data--------------------------------------------------------------
let result=await db.deleteOne({name:undefined})
-similarly we have deleteMany() and it result gives "deletedcount" from which we can check
if given data is deleted or not 0 means no data deleted 
'
>***u should always send res as if not it will never stop ----------------------------------------------------------------------------------
-'-----------------------------------------------------get api --------------------------------------------------------------------
 app.get('/',async (req,res)=>{
    let db=await dbConnection()
    let data=await db.find({}).toArray()
    res.send({name:"swayam","data":data})

})
------------------------------------------------------post api --------------------------------------------------------------------
                              when using or sending data to post req
                              use app.use(express.json()) middleware 
                              to change json send to js object . this middleware automatically
                              parses the JSON data in the request body and makes it available 
                              in the req.body object for further processing in your route handlers.

-app.post('/',async (req,res)=>{
    console.log(req.body) ---->req.body is jsobject but it was json when send from post as it is change by middleware
    let db=await dbConnection()
    let result=await db.insertOne(req.body)
    res.send(result)
})
------------------------------------------------------put api --------------------------------------------------------------------
app.put('/:name?',async (req,res)=>{
    console.log(req.body)
    let db=await dbConnection()
    let result=await db.updateOne({name:req.params.name},{$set:req.body})
    res.send(result)
})
----------------------------------------------------------------delete api data--------------------------------------------
 
app.delete('/:id?',async (req,res)=>{
    console.log(req.body)
    let db=await dbConnection()
    let result=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})  //for _id u have to convert it id to object id

    res.send(`<h1>${JSON.stringify(result)}</h1>`) //here we are converting object to json because If you are seeing *[object Object] in your response, it usually indicates that you are trying to concatenate or interpolate an object directly into a string.

    console.log(result)
})
-------------------------------------------------------------------------------------------------------------------------------------------------
>npm i mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

--------------------------------------------------------------------------------------------------------------------------------------------------
 In Mongoose, the find() method returns a Query object. However, when used with await, Mongoose automatically executes the query and returns an array of documents. So, in Mongoose, you don't need to use toArray() explicitly.

 In MongoDb,The find() method returns a cursor, and you need to call toArray() to convert the cursor's results into an array of documents. This is a common pattern when using the official MongoDB driver in a non-Mongoose context.

 -----for read,insert,update,delete -----db/connectMongoose.js and db/mongooseUpdate.js for api-apiPostMongoose 
 >app.get('/',async(req,res)=>{
    let data=await read()
    await read().then((r)=>{console.log(r)}) //you cannot write data.then()
    res.send(data)
})
>for insert only we need schema object to pass in model
--** but remember if used schema then when u perform find ,or other update etc it only data that follows that schema ---
--** so it better to use empty schema mongoose.Schema({})-------------------!important
>use mutliple or condition to find --
 let data = await Productmodel.find({
        
          "$or":[  //any condition satisfies
            {name:{$regex: namei}},  //matches any string with namei even it includes that part also
            {price:{$regex:namei}}
          ]
        
      });
===The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model
---------------------------------------------------------------------------------------------------------------------------------------------------
>npm i multer
>Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.