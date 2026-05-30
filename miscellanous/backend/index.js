const express = require("express");
const app= express();
const port= 8080;

app.use(express.urlencoded({ extended: true })); // for HTML form data
app.use(express.json());                          // for JSON data
app.get("/register",(req,res) =>{
    let { user, password}=req.query;
    res.send(`standard get response. welcome ${user}`);
})
app.post("/register",(req,res) =>{
    let { user, password}=req.body;
    res.send(`standard post response. welcome ${user}`)
})
app.listen(port,() =>{
    console.log(`listening to port ${port}`); 
})
