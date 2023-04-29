const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middlewere 

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Grow Bhai is running');
})

app.listen(post, ()=>{
    console.log(`Grow Bhai Runnig on ${port}`);
})