
require('dotenv').config();
const express=require('express');
const routes=require('../backend/routes/route')
const mongoose=require('mongoose');

const app=express();
app.use(express.json())
// app.listen(process.env.PORT,()=>{
//     console.log('server running on port 4000',process.env.PORT);
// })

app.use('/api/',routes);
mongoose.connect(process.env.mongoUri).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server running on port ',process.env.PORT);
    })
}).catch((error)=>{
    console.log('error on database',error)

})

// app.get('/',(req,res)=>{
//     res.json({
//         'family':'family caring first'
//     })
// })