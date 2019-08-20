const express = require('express'),
      mongoose = require('mongoose'), 
      methodOverride = require('method-override'),
      seedDB = require('./seed-database');
      Recipes = require('./models/recipe-model'),
      app = express();

// For Environment Variables(to be stored in .env)
require('dotenv').config();
// set our local port
const PORT = process.env.LOCAL_PORT;

///////////// SETTINGS /////////////
// set view engine template to ejs
app.set('view engine', 'ejs');
// body parser for POST requests
app.use(express.urlencoded({ extended: true }));
// setup static includes folder
app.use(express.static( 'includes' ));
// So that put and delete requests can be made via html form
app.use(methodOverride('_method'));


////////// DATABASE SETUP //////////
mongoose.connect('mongodb://localhost/recipes_app',{ useNewUrlParser: true });

// Reseed the DB
seedDB();

// ROUTES   

// ROOT
// Redirect to INDEX ROUTE
app.get('/', (req, res) => {
    res.redirect('/recipes')
});

// INDEX
// Show all Recipes search the db and pass recipes data to index template
app.get('/recipes', (req, res) => {
    Recipes.find({}, (err,recipes) => {
        if(err){
            console.log(`You have an ${err}`)
        } else {
            res.render('index', {recipes:recipes} );
        }
    })
});

// NEW 
// Create a new recipe form
app.get('/recipes/new', (req, res) => {
    res.render('new-recipe');
});

// CREATE
// This adds the recipe to the database and normally redirects somewhere
app.post('/recipes', (req, res) => {
    Recipes.create({
        title: req.body.title,
        category: JSON.parse(req.body.category),
        image: req.body.image,
        description: req.body.description,
        ingredients: JSON.parse(req.body.ingredients),
        method: JSON.parse(req.body.method)
    }, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// SEARCH
// shows recipe / recipes you searched for
app.get('/recipes/search', (req, res) => {
    res.render('search');
});

// SHOW
// This displays one recipe only
app.get('/recipes/:id', (req, res) => {
    // get recipe id from url string, find that recipe in the db
    // and pass the recipe data to the show-recipe template
    const recipeId = req.params.id;
    Recipes.findById(recipeId, (err, recipe) => {
        if(err){
            console.log(err);
        } else {
            res.render('show-recipe', {recipe:recipe});
        }
    });  
});

// EDIT
// This shows an edit form for one previously existing recipe
app.get('/recipes/:id/edit', (req, res) => {
    Recipes.findById(req.params.id, (err,recipe) => {
        if(err){
            console.log(err);
        } else {
            res.render('edit', {recipe:recipe});
        }
    })
});

// UPDATE
// This updates the recipe in the DB then redirects somewhere
app.put('/recipes/:id', (req, res) => {
    Recipes.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        category: JSON.parse(req.body.category),
        image: req.body.image,
        description: req.body.description,
        ingredients: JSON.parse(req.body.ingredients),
        method: JSON.parse(req.body.method)
    }, (err, updatedRecipe) => {
        if(err) {
            console.log(err);
        } else {
            console.log(updatedRecipe);
            res.redirect('/recipes');
        }
    });
});

// DESTROY
// This deletes a recipe then redirects somewhere
app.delete('/recipes/:id', (req, res) => {
    const id = req.params.id;
    // find the specific recipe and delete from db then redirect to recipes page
    Recipes.findByIdAndRemove(id, (err,deletedRecipe) => {
        if(err){
            console.log(err);
        } else {
            console.log(deletedRecipe);
            res.redirect('/recipes')
        }
    });
});

// Our server is listening for requests on the specified port
app.listen(PORT, () => {
    console.log(`Listening ${PORT}!`);
});