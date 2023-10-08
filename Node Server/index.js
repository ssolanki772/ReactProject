const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/kidsfashion');
    console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });
const User = mongoose.model('User', userSchema);

const subSchema = new mongoose.Schema({
  subEmail: String
});
const Subscribe = mongoose.model('Subscribe', subSchema);

const productSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: String
});
const Product = mongoose.model('Products', productSchema);

const imageSchema = new mongoose.Schema({
  img: String
});
const Image = mongoose.model('images', imageSchema);

const server = express();

server.use(cors())
server.use(bodyParser.json())
// CREAT
server.post('/register', async (req,res)=>{
    
    let user = new User();
    user.email = req.body.email
    user.password = req.body.password
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/login', async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.post('/subscribe', async (req,res)=>{
    
  let user = new Subscribe();
  user.subEmail = req.body.subEmail
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
})

server.post('/images',async (req,res)=>{
  const { base64 } = req.body;
  try {
    await Image.create({img : base64});
    res.send({Status:"ok"})
  } catch (error) {
    res.send({Status:"Error",data:error});
  }
})

server.get('/product', async (req,res)=>{
  const docs = await Product.find();
  res.json(docs)
})

server.listen(8080,()=>{
    console.log("server started")
})
