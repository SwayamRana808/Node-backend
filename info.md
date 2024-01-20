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