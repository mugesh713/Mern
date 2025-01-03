var express=require('express')
var app=express()
const PORT=3001
app.get('/',(req,res)=>{
    res.send("welcome to backend server");
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/naren/OneDrive/Documents/react/vite project/viteProjectBackend/index.html')
})
app.listen(PORT,()=>{
    console.log('backend server started\n Url:http://localhost:${PORT}')
})