'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const handleCreateRecipe = require('./modules/createRecipe.js')
const handleGetRecipe = require('./modules/getRecipe.js');
const handleUpdateRecipe = require('./modules/updateRecipe.js');
const handleDeleteRecipe = require('./modules/deleteRecipe.js')
const app = express();


app.use(cors());
app.use(express.json());
// app.use(authorize);

mongoose.connect(MONGODB_URL);

// READ
app.get('/recipes', handleGetRecipe);

// CREATE
app.post('/recipes', handleCreateRecipe);

// UPDATE
app.put('/recipes/:recipeId', handleUpdateRecipe);

// DELETE
app.delete('/recipes/:recipeId', handleDeleteRecipe);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
