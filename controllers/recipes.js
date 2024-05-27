const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe.js');


router.post('/', async (req,res) => {
    const createdRecipe = await Recipe.create(req.body);
    res.json(createdRecipe)
})

router.get('/', async (req,res)=>{
    try{
        const foundRecipes = await Recipe.find()
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:recipeId', async (req,res)=>{
    try{
        const foundRecipe = await Recipe.findById(req.params.recipeId)
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.delete('/:recipeId', async (req,res)=>{
    try{
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.recipeId)
        res.status(200).json(deleteRecipe)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.put('/:recipeId', async (req,res)=>{
    try{
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.recipeId)
        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})







module.exports = router;