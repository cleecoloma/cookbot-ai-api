'use strict';

require('dotenv').config();
const axios = require('axios');

const OPEN_AI_URL = process.env.OPEN_AI_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPEN_AI_IMAGE_URL = process.env.OPEN_AI_IMAGE_URL;
const RecipeModel = require('../models/RecipeModel.js');

const header = {
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
};

const handleUpdateRecipe = async (request, response) => {
  try {
    console.log('PUT request: ', request.body);
    const id = request.params.recipeId;
    const { foodItems } = request.body;
    const recipeRequest = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `I will give you a list of food ingredients. If one of the ingredients is not a food item, provide a response starting with the text Error. If all ingredients are food items, please provide a food dish that uses these ingredients: ${foodItems}. Don't use any other ingredients other than readily available pantry items. Provide your response in a json object with the following properties: dishName, ingredients, cookingSteps, cookingDuration, and countryOfOrigin where ingredients and cookingSteps as arrays`,
        },
      ],
    };
    const openAiRecipeResponse = await axios.post(
      OPEN_AI_URL,
      recipeRequest,
      header
    );
    const openAiRecipe = openAiRecipeResponse.data.choices[0].message.content;
    const parsedRecipe = JSON.parse(openAiRecipe);
    const {
      dishName,
      ingredients,
      cookingSteps,
      cookingDuration,
      countryOfOrigin,
    } = parsedRecipe;

    const imageRequest = {
      model: 'image-alpha-001',
      prompt: `${dishName} plated beautifully. If the following word: ${countryOfOrigin} is not a country, place the image setting in a michelin start restaurant setting. If not, place the image in a setting related to ${countryOfOrigin} country`,
      n: 1,
      size: '1024x1024',
    };

    const openAiImageResponse = await axios.post(
      OPEN_AI_IMAGE_URL,
      imageRequest,
      header
    );

    const imageUrl = openAiImageResponse.data.data[0].url;

    const newRecipe = new RecipeModel({
      dishName,
      ingredients,
      cookingSteps,
      cookingDuration,
      countryOfOrigin,
      imageUrl,
    });

    await RecipeModel.replaceOne({ _id: id }, newRecipe);
    const updatedRecipe = await RecipeModel.findOne({ _id: id });
    console.log('Recipe updated!: ' + updatedRecipe);
    response.json(updatedRecipe);
  } catch (error) {
    console.error('Network Error:', error);
    response.status(500).send('Internal server error');
  }
};

module.exports = handleUpdateRecipe;
