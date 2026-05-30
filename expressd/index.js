const express = require('express')
const app = express();

let port=3000;

app.listen(port,()=>{
    console.log(`app is istening on ${port}`);
});
// app.use((req,res)=>{
//     // console.log(req);
// console.log("request is recieved");
// res.send("this is a basic response");
// });

app.get("/",(req,res)=>{
res.send("hello i am root");
});

app.get("/:username/:id",(req,res)=>{
let {username,id}=req.params;
let htmlstr=`<h1>welcome to the page of @${username}</h1>`
res.send(htmlstr);
});