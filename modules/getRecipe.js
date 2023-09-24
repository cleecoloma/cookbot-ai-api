'use strict';

const RecipeModel = require('../models/RecipeModel.js');

const handleGetRecipe = async (request, response) => {
  const email = request.query.user;
  try {
    let recipes = await RecipeModel.find({ user: email});
    response.json(recipes);
  } catch (error) {
    console.log('Something when wrong when finding recipes', error);
    response.status(500).send(error);
  }
};

module.exports = handleGetRecipe;