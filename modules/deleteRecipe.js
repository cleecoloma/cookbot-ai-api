'use strict';

require('dotenv').config();
const axios = require('axios');

const OPEN_AI_URL = process.env.OPEN_AI_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const RecipeModel = require('../models/RecipeModel.js');

const header = {
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
};

const handleDeleteRecipe = async (request, response) => {
  if (!request.params.recipeId) {
    request.status(404).send('Please provide a valid recipe ID');
    return;
  }
  try {
    let recipe = await RecipeModel.findByIdAndDelete(request.params.recipeId);
    response.status(204).send('Success');
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

module.exports = handleDeleteRecipe;
