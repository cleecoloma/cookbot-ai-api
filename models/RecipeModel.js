'use strict';

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  cookingSteps: {
    type: Array,
    required: true,
  },
  cookingDuration: {
    type: Number,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;