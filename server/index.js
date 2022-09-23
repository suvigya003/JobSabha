const express=require('express');
const app=express();
const cors= require('cors');
const dotenv = require('dotenv');
const { request, response } = require('express');
dotenv.config();

const dbService=require('./configs/dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//add
app.post('/insert',(request,response)=>{
    const {name}=request.body;
    const db=dbService.getDbServiceInstance();
    
    const result =db.insertNewName(name);
    result.then(data=>response.json({success:true}))
    .catch(err=>console.log(err))
    });

app.listen(process.env.PORT,()=>console.log('app is runing'));