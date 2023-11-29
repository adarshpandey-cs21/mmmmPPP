const mongoose=require('mongoose');

const db=async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Successfully connected to database");
    }catch(err){
        console.log("error in db connectins",err);
    }
}

module.exports={db};