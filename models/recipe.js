const mongoose = require('mongoose')

// const ingredientSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     quantity: {
//         type: String,
//         required: true
//     }
// });

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [String], 
    cuisineType: String,

})
//Why does this not work??


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;