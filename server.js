require('dotenv').config({ path: 'sample.env' });
const express=require('express')
const ejs=require('ejs')
const expresslayout=require('express-ejs-layouts')
const path =require('path')
const mongoose=require("mongoose");

const app=express()
const PORT=process.env.PORT || 3000

// Database Conncetion 

const url='mongodb://localhost:27017'

mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
});
const Connection=mongoose.connection;

Connection.once('open',()=>{
    console.log('Database connected......');
}).catch(err=>{
    console.log('connection failed.....')
});

//set template engine
app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

//assets
app.use(express.static('public'))

require("./routes/web")(app) 



 
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
})