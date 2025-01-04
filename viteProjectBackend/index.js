var express=require('express')
var app=express()
var mdp = require('mongoose')
const PORT=3001
mdp.connect("mongodb://localhost:27017/").then(() => {
    console.log("Connected Sucessfully")
}).catch(() => {
    console.log("Error in connection")
});
app.get('/',(req,res)=>{
    res.send("welcome to backend server");
})
app.get('/static',(req,res)=>{
    res.sendFile(path.join(_dirname,'index.html'))
})
app.listen(PORT,()=>{
    console.log('backend server started\n Url:http://localhost:${PORT}')
})