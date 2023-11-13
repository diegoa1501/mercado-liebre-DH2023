const express = require('express');

const path = require('path'); // libreria nativa de node para resolver direcciones

const app = express();


//puerto

let port = process.env.PORT || 3000 ;

app.listen(port,()=> console.log("servidor corriendo"));

app.use(express.static('public'));

app.get('/clarke',(req,res) => res.sendFile(path.resolve("./views/clarke.html")));

app.get('/',(req,res) => res.sendFile(path.resolve("./views/home.html")));

app.get('/register',(req,res) => res.sendFile(path.resolve("./views/register.html")));