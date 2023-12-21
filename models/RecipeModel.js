'use strict';

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  timestamp: {
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
    type: Number,
    required: true,
  },
  prepDuration: {
    type: Number,
    required: true,
  },
  servingSize: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;