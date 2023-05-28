
require('dotenv').config();
const express=require('express');
const allRoutes=require('../backend/routes/route')
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

const app=express();
app.use(express.json())
const cors = require('cors')
app.use(cors({
    credentials: true,
}

))
const { validationResult } = require('express-validator');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/',allRoutes);

mongoose.connect(process.env.mongoUri).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server running on port ',process.env.PORT);
    })
}).catch((error)=>{
    console.log('error on database',error)

})
