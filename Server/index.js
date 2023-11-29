const express=require('express');
const app=express();
// const path=require('path');
const cors=require('cors');
const {db}=require('./db/db');
const {readdirSync}=require('fs');

require('dotenv').config();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());

//for routes
readdirSync('./routes').map((route)=>app.use('/api/v1/',require('./routes/'+route)));

db();
app.listen(PORT,()=>{
    console.log(`server started successfully at PORT ${PORT}`);
})