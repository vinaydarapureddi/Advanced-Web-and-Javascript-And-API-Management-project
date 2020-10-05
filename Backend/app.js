const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017',{useUnifiedTopology:true,useNewUrlParser:true})
const cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/user/',require('./routes/user_route'))
app.use('/comments/',require('./routes/movieComments_routes'))
app.use('/rating/',require('./routes/movieRating_routes'))
const port = 9000
app.listen(port)


/*const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MovieBuzz'
const http = require('http');no
const app = express()

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log("Mongo DB Connected")
})
var userRouter = require('./routes/user.route.js')
app.use('/asa',userRouter)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MovieBuzz'

var http = require('http')
const app = express()

var server = http.createServer(app)
mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log("Mongo DB Connected")
})


app.use(express.json)

var userRouter = require('./routes/users.js')


app.listen(8089,'localhost')


app.get('/',function(request,response){
    response.send("Hello world");
})

//server.listen(9000);
//console.log(server.address().port)

app.use('/users',userRouter)*/