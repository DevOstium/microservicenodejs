const express = require('express');
var http = require('http')

var app =  express();

app.get('/', (req, res)=>{
    console.log("get do barra");
    res.json("Server B")
});

http.createServer(app).listen(3002, function() {
    console.log('Servidor estutando na porta: ' + this.address().port );
});