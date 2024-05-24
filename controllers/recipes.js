const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe.js');


router.post('/', async (req,res) => {
    const createdRecipe = await Recipe.create(req.body);
    res.json(createdRecipe)
})

module.exports = router;