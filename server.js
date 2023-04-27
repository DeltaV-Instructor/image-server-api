'use strict';
console.log('server running');
//requires
const axios = require('axios');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


//use
const app = express();
app.use(cors());
//PORT
const PORT = process.env.PORT || 5005;


//routes
app.get('/', (req,res) => {
  res.status(200).send('Hello from our server!');
});

//look at api to get data
//add the call to the api
//construct an image object
//send those objects to front end to dispay
 








app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});

//error handling
//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

//listen to port for server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
