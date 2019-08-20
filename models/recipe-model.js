const mongoose = require('mongoose');

/////// DB SCHEMA AND MODEL ///////

const Schema = mongoose.Schema;
// Define the campgroundSchema keys and key types
const recipeSchema = new Schema({
   title: String,
   category: [],
   image: String,
   description: String,
   ingredients: [],
   method: []
});

// export the DB model
module.exports = mongoose.model('Recipes',recipeSchema);
