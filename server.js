import express from 'express';
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome to my home page")
})
app.listen(3000,()=>{
    console.log('server is running  on port 3000 is running')
})