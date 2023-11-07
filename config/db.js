const cloudurl="mongodb+srv://pkv202000:Princemongodb@cluster0.zpdmpxx.mongodb.net/?retryWrites=true&w=majority"
const mongoose=require("mongoose")
mongoose.set("strictQuery",true)// strict mode is true

const connection=async()=>{
    try{
        await mongoose.connect(cloudurl)
        console.log("connection made successfully")

    }
    catch(err){
        console.log(err,"error occurred")
    }
}

module.exports=connection;