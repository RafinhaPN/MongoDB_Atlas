const express = require('express');
const app = express();
const routes = require('./src/Routes');
const cors = require('cors');
const conectar = require('./src/Database/db');
conectar();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");     
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
    app.use(cors())
    next();    
  });
app.use(express.json());
app.use(routes);
app.listen(8082,function(){
    console.log("rodando");
})