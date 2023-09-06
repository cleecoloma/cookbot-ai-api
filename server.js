'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RecipeModel = require('./models/RecipeModel.js');
// const authorize = require('./auth/authorize.js');
// const OpenAI = require('openai');
const axios = require('axios');
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
// const OPEN_AI_URL = process.env.OPEN_AI_URL;
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const handleCreateRecipe = require('./modules/createRecipe.js')
const handleGetRecipe = require('./modules/getRecipe.js');
const handleUpdateRecipe = require('./modules/updateRecipe.js');
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
app.delete('/recipes/:recipeId', async (request, response) => {
  if (!request.params.recipeId) {
    request.status(404).send('Please provide a valid recipe ID');
    return;
  }
  try {
    let recipe = await RecipeModel.findByIdAndDelete(request.params.recipeId);
    response.status(204).send('Success');
  } catch (error) {
    response.status(500).send('Internal Server Error')
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
