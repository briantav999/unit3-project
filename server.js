// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// const mongoose = require('mongoose')
// const cors = require('cors');
// dotenv.config()
// const recipeRouter = require('./controllers/recipes.js')

// mongoose.connect(process.env.MONGODB_URI)

// app.use(cors());
// app.use(express.json())

// app.use('/recipes', recipeRouter);

// app.listen(3000, ()=>{
//     console.log('App is listening');
// })

//server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const recipeRouter = require('./controllers/recipes.js');

mongoose.connect(process.env.MONGODB_URI);
app.use(cors());
app.use(express.json());

app.use('/recipes', recipeRouter);

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});