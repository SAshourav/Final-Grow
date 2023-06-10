const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//middlewere 

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());

const fs = require('fs');
//mongoDb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2pfkbmr.mongodb.net/?retryWrites=true&w=majority`;
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
        const farmers = client.db('growBangla').collection('Farmers');
        const cartCollection = client.db('growBangla').collection('Carts');
        const orderCollection = client.db('growBangla').collection('Orders');
        
        //add product api
        // Server-side code
          app.post('/addProduct', async (req, res) => {
            const addproduct = req.body;
            
            // Extract the Base64 image from the request body
            const base64Image = addproduct.image;
            
            // Remove the Base64 image from the addproduct object
            delete addproduct.image;
            
            // Convert the Base64 image to a Buffer
            const imageBuffer = base64Image;
            
            // Generate a unique filename for the image
            const filename = Date.now() + '.jpg'; // You can use a different file extension if needed
            
            // Specify the file path to save the image
            const filePath = './uploads/' + filename;
            
            try {
              // Write the image buffer to the file
              fs.writeFileSync(filePath, imageBuffer);
              
              // Set the image filename in the addproduct object
              addproduct.image = filename;
              
              // Insert the addproduct object into the database
              const result = await productCollection.insertOne(addproduct);
              
              res.send(result);
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'An error occurred' });
            }
          });


        app.get('/addedproduct', async(req, res)=>{
          const query = {};
          const cursor = productCollection.find(query);
          const products = await cursor.toArray();
          res.send(products);
        })

        //get the image
        app.use('/uploads', express.static('uploads'));

        // Endpoint to retrieve and display the image
        app.get('/image/:filename', (req, res) => {
          const filename = req.params.filename;
          const imagePath = `./uploads/${filename}`;

          // Read the image file as a buffer
          fs.readFile(imagePath, (err, data) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'An error occurred' });
            } else {
              // Set the appropriate content type for the response
              res.setHeader('Content-Type', 'image/jpg');

              // Send the image buffer as the response
              res.send(data);
            }
          });
        });

        //farmer Account Open

        app.post('/farmers', async(req, res)=>{
          const addFarmer = req.body;
          const result = await farmers.insertOne(addFarmer);
          res.send(result);
        })

        ////farmer Account Open
        app.get('/farmers', async (req, res) => {
          const query = {};
          const cursor = farmers.find(query);
          const emails = await cursor.toArray();
          res.send(emails);
        });
        

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
        })

        //cart single element delete
        app.delete('/cart/:account/:_id', async (req, res) => {
          const { account, _id } = req.params;
          
          try {
            const result = await cartCollection.deleteOne({ account, _id: new ObjectId(_id) });
            
            if (result.deletedCount === 1) {
              res.send('Document deleted successfully.');
            } else {
              res.status(404).send('Document not found.');
            }
          } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while deleting the document.');
          }
        });
        

        //orders

        app.post('/order', async(req, res)=>{
          const order = req.body;
          const result = await orderCollection.insertOne(order);
          res.send(result);
        })

        app.get('/order', async(req, res)=>{
          const query = {};
          const cursor = orderCollection.find(query);
          const orders = await cursor.toArray();
          res.send(orders);
        })

        const {ObjectId} = require('mongodb');
        app.put('/order/:id', async (req, res) => {
          const { id } = req.params;
          const { status } = req.body;
          
          try {
            const result = await orderCollection.updateOne(
              { _id: new ObjectId(id) },
              { $set: { status } }
            );
        
            if (result.modifiedCount === 1) {
              res.sendStatus(200);
            } else {
              res.sendStatus(400);
            }
          } catch (error) {
            console.log(error);
            res.sendStatus(500);
          }
        });

        //clint side uopdte

        app.put('/Corder/:id', async (req, res) => {
          const { id } = req.params;
          const { orderStatus } = req.body;
          const status = orderStatus;
          
          try {
            const result = await orderCollection.updateOne(
              { _id: new ObjectId(id) },
              { $set: { status } }
            );
        
            if (result.modifiedCount === 1) {
              res.sendStatus(200);
            } else {
              res.sendStatus(400);
            }
          } catch (error) {
            console.log(error);
            res.sendStatus(500);
          }
        });


        
        
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