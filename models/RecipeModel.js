'use strict';

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  timestamp:{
    type: Date,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
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
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;