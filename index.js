const http =require("http");

const fs = require("fs")


fs.writeFileSync('index.html' , '<h1> Hello World </h1> <br> <p> This is Pankaj  ... </p>')

const server = http.createServer((req, res)=>{

    fs.readFile("index.html" ,(err , data) =>{

        res.end(data);
    })


});

server.listen(5000 , ()=> {

    console.log("server is up at 5000")
});