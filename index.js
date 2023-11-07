const express=require('express')
const connection=require('./config/db')
const cors=require('cors')
const routes=require('./router/userRouter')
const app=express()
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/api",routes)

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.listen(8080,async()=>{
    try{
        await connection()
        console.log('server is live at 8080 port number')
    }
    catch(err){
        console.log(err,"error occurred")
    }
})

