'use strict';

const handleGetRecipe = async (request, response) => {
  try {
    let recipes = await RecipeModel.find({});
    response.json(recipes);
  } catch (error) {
    console.log('Something when wrong when finding recipes', error);
    response.status(500).send(error);
  }
};

module.exports = handleGetRecipe;