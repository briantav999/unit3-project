// const express = require('express');
// const router = express.Router();

// const Recipe = require('../models/recipe.js');


// router.post('/', async (req,res) => {
//     const createdRecipe = await Recipe.create(req.body);
//     res.json(createdRecipe)
// })

// router.get('/', async (req,res)=>{
//     try{
//         const foundRecipes = await Recipe.find()
//         res.status(200).json(foundRecipes)
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })

// router.get('/:id', async (req,res)=>{
//     try{
//         const foundRecipe = await Recipe.findById(req.params.id)
//         res.status(200).json(foundRecipe)
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })


// router.delete('/:id', async (req,res)=>{
//     try{
//         const deleteRecipe = await Recipe.findByIdAndDelete(req.params.recipeId)
//         res.status(200).json(deleteRecipe)
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })


// router.put('/:id', async (req,res)=>{
//     try{
//         const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.recipeId)
//         res.status(200).json(updatedRecipe)
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })







// module.exports = router;

const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe.js');

// Create a new recipe
router.post('/', async (req, res) => {
    try {
        const createdRecipe = await Recipe.create(req.body);
        res.status(201).json(createdRecipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all recipes
router.get('/', async (req, res) => {
    try {
        const foundRecipes = await Recipe.find();
        res.status(200).json(foundRecipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const foundRecipe = await Recipe.findById(req.params.id);
        res.status(200).json(foundRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;