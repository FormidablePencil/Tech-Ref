//~ Everything to reference is in this file, in models/SchemaExamp.js (modal that tell the data what it must adherer to to pass to database) and .env (where we store our database connection string)
//~ This refernce file is used with Postman application

const express = require('express')
const app = express()
const mongoose = require('mongoose') //mongoose helps us connect to the mongoDB and use it's "schema or models" to do CRUD operations
require('dotenv/config')
//this is a package that we've installed (dotenv) that allows us to store login information securitly by putting the credentials into .env file and inporting it here through the dotenv package by doing 'process.env.USER_DANIELCH'

//this is the 'schema that describes by what the fetchend data must adhere to 
const SchemaExamp = require('./models/SchemaExmp')

//middleware - are funcions 
app.use('/posts', () => {
  console.log('This is middleware running')
})

//Example of puttting routes into seperate files
const exampleSeperateRoutesFile = require('./routes/exampleRoutes')
app.use('/example', exampleSeperateRoutesFile)
//now you may visit example/exampleOfUsingRoutersInSeperateFiles url

//this is express' built in body parser
app.use(express.json()); //makes 'req.body' work

//@ Crud creating a new colletion with the fetched data from the frontend
app.post('/', async (req, res) => {
  console.log(req.body)
  //we've created this class that determines what the data fetched must adhear to for the server to pass on to the database 
  const schemaExample = new SchemaExamp({
    title: req.body.title,
    description: req.body.description,
  })
  //so if the fetched data passes to the adhering standards then mongoose automagically upload the data into the database... just as long as we've connected to the database with dotenv it all should work wonders
  try {
    const saved = await schemaExample.save()
    res.json(saved) //respomd back with the deleted data
  } catch {
    res.json({ message: err })
  }
})

//@ cRud read all tables in the collection
app.get('/', async (req, res) => {              //These method are on mongoose framework
  console.log('thereee')
  try{
    const allCollectionsFromExamps = await SchemaExamp.find()
    console.log('objectqq')
    res.json(allCollectionsFromExamps)
  } catch (err) {
    res.json({ message: err })
  }
})

//@ cRud read specific collection
app.get('/specific/:idOfCollection', async (req, res) => {
  console.log(req.params.idOfCollection) //this is how you access the uri typed after : for when you need it to find something specific in the database
  try {
    const specificCollection = await SchemaExamp.findById(req.params.idOfCollection)
    res.json(specificCollection)
  } catch (err) {
    res.json({ message: err })
  }
})

//@ cruD
app.delete('/specific/:idOfCollection', async (req, res) => {
  try {
    const removedSpecificCollection = await SchemaExamp.remove({ _id: req.params.idOfCollection })
    res.json(removedSpecificCollection)
  } catch (err) {
    res.json({ message: err })
  }
})

//@ crUd
app.patch('/specific/:idOfCollection', async (req, res) => {
  try {                                         //two params updateOne() takes. First param id what collection and second what field in the collection to change
    const updated = await SchemaExamp.updateOne({ _id: req.params.idOfCollection }, { $set: { title: req.body.title, description: req.body.description } })
    res.json(updated)
  } catch (err) {
    res.json({ message: err })
  }
})

//Connect to db
// mongoose.connect('mongodb://localhost/testaro') //* if was localhost database
mongoose.connect(process.env.USER_DANIELCH, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => console.log('connected to db'));

//this is what make the server work... and the express framework ofcourse
app.listen(4001)