'use strict';

const RecipeModel = require('../models/RecipeModel.js');

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
