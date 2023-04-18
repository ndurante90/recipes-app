const mongoose = require('mongoose');
const seedData = require('./seed/recipes.json');
const recipeCategories = require('./seed/recipe-categories.json');
const ingredients= require('./seed/ingredients.json');
const connectionString  = process.env.ATLAS_URI || "";

// Define a schema for your data
const recipeSchema = new mongoose.Schema({
    creationDate: Date,
    name: String,
    category: String,
    description: String,
    difficulty: Number
  });
  
  // Define a schema for your data
  const recipeCategorySchema = new mongoose.Schema({
    id: String,
    value: Number,
    description: String
  });
  
  const ingredientsSchema = new mongoose.Schema({
    id: String,
    name: String
  });
  
  // Define a model for your data
  const Recipe = mongoose.model('Recipe', recipeSchema);
  
  const RecipeCategory = mongoose.model('RecipeCategory', recipeCategorySchema);
  
  const Ingredient = mongoose.model('Ingredient', ingredientsSchema);

   module.exports = async function seedDatabase (){

    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'recipes-db'
    });

    try {
        await Recipe.deleteMany();
        const count = await Recipe.countDocuments();
        if (count === 0) {
          await Recipe.insertMany(seedData);
        }
    
        await RecipeCategory.deleteMany();
    
        const countCategories = await RecipeCategory.countDocuments();
        
        if (countCategories === 0) {
          await RecipeCategory.insertMany(recipeCategories);
        }
    
        await Ingredient.deleteMany();
    
        const countIngredients = await Ingredient.countDocuments();
        
        if (countIngredients === 0) {
          await Ingredient.insertMany(ingredients);
          console.log('Database seeded!');
        }
    
      } catch (err) {
        console.error(err);
      }
}