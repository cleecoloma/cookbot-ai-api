'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RecipeModel = require('./models/RecipeModel.js');
const authorize = require('./auth/authorize.js');
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();

app.use(cord());
app.use(express.json());
app.use(authorize);

mongoose.connect(MONGODB_URL);

// READ
app.get('/recipes', async (request, response) => {
  try {
    let recipes = await RecipeModel.find({});
    response.json(recipes);
  } catch (error) {
    console.log('Something when wrong when finding recipes', error);
    response.status(500).send(error);
  }
})

// CREATE
app.post('/recipes', async (request, response) => {
  try {
    console.log('POST request: ', request.body);
    let ingredients = request.body.ingredients;
    if (!ingredients.length) {
      response.status(400).send('Please send valid food ingredients');
    } else {
      let newRecipe = new RecipeModel({ dishName, cookingSteps, cookingDuration, countryOfOrigin });
      let recipe = await newRecipe.save();
      console.log('New recipe created!: ' + recipe);
      response.json(recipe);
    }
  } catch (error) {
    response.status(400).send('Please send proper ingredient(s): ', error);
  }
});

// UPDATE
app.put('/recipes/:recipeId', async (request, response) => {
  let id = request.params.recipeId;
  try {
    await RecipeModel.replaceOne({ _id: id }, request.body);
    let newRecipe = await RecipeModel.findOne({ _id: id });
    response.status(200).json(newRecipe);
  } catch (error) {
    response.status(400).send(error);
  }
});

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