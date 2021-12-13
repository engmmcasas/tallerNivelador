const express = require("express");
var cowsay = require('cowsay')

const app = express()

app.use(express.text());

app.get("/", (req, res) => {

    res.end(
        cowsay.say({
          text: "Intro master web development...!",
          e: "oO",
          T: "U "
        })
      );
});


app.post("/", (req, res) => {

    cowsayThis = req.body;
    res.end(
        cowsay.say({
          text: cowsayThis,
          e: "oO",
          T: "U "
        })
      );
});


app.listen(3000, () => {

    console.log("Server running on port 3000");
})


/*

app.get("/", (req, res) => {

    res.send("Text")

} );

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
// const _ = require('lodash')

const server = http.createServer((req, res) => {
                                 res.statusCode = 200;
                                 res.setHeader('Content-Type', 'text/txt');
                                 res.end(
                                   cowsay.say({
                                     text: "Hello World!",
                                     e: "oO",
                                     T: "U "
                                   })
                                 );
                                 });
server.listen(port, hostname, () => {
                        console.log(`Server running at http://${hostname}:${port}/`);
                      });


*/