const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//middlewere 

app.use(cors());
app.use(express.json());

//mongoDb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2pfkbmr.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(){
    try{
        const productCollection = client.db('growBangla').collection('addingProduct');
        const cartCollection = client.db('growBangla').collection('Carts');
        const orderCollection = client.db('growBangla').collection('Orders');

        //add product api
        app.post('/addProduct', async(req, res)=>{
          const addproduct = req.body;
          const result = await productCollection.insertOne(addproduct);
          res.send(result);
        })

        app.get('/addedproduct', async(req, res)=>{
          const query = {};
          const cursor = productCollection.find(query);
          const products = await cursor.toArray();
          res.send(products);
        })

        //cart

        app.post('/cart', async(req, res)=>{
          const cartProduct = req.body;
          const result = await cartCollection.insertOne(cartProduct);
          res.send(result);
        })

        app.get('/cart', async(req, res)=>{
          const query = {};
          const cursor = cartCollection.find(query);
          const cartProduct = await cursor.toArray();
          res.send(cartProduct);
        })

        app.delete('/cart/:email', async (req, res) => {
          const account = req.params.email;
          const result = await cartCollection.deleteMany({ account });
          res.send(result);
        });

        //orders

        app.post('/order', async(req, res)=>{
          const order = req.body;
          const result = await orderCollection.insertOne(order);
          res.send(result);
        })


        
        
    }
    finally{

    }
}
run(); 

app.get('/', (req,res)=>{
    res.send('Grow Bhai is running');
})

app.listen(port, ()=>{
  console.log(`Grow bhai is Running on ${port}`);
})