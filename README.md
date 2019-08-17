# RESTful-recipe-book-app
A RESTful Recipe App to collect my favourite recipes so i can view them for later use - Based on Colt Steele's Web Developer Bootcamp

Im thinking of hosting this on my home server so i can use it when cooking

## RESTful Routes

| name  |       url        | verb  |            Decription                   |
|-------|------------------|-------|-----------------------------------------|
|INDEX  | /recipes         | GET   | Displays a list of all recipes          |
|NEW    | /recipes/new     | GET   | Displays a form to add a new recipe     |
|CREATE | /recipes         | POST  | Add a new recipe to the DB              |
|SHOW   | /recipes/:id     | GET   | Show info about one recipe only         |
|EDIT   | /recipes/:id/edit| GET   | Show edit form for one recipe           |
|UPDATE | /recipes/:id     | PUT   | Update a recipe, then redirect somewhere|
|DESTROY| /recipes/:id     | DELETE| Delete a recipe, then redirect somewhere|
 
## Commit Overview

### 1st Commit - Installation and Setup
- Install Express, mongoose, handlebars, foundation and dotenv 
- Setup Express, mongoose 
- Create schema for DB
- create basic folder directory structure  
- create basic routes

### 2nd Commit - Templating and routing
- Update routes to include a search route
- Add templates to index, search and show routes
- Basic styling of templates
- add a js folder under includes folder and create a new-recipe.js file
- Add basic js functionality to the New recipe form
- add a partial footer-new-recipe so that we can have js form validation

### 3rd Commit - Seed DB add logic to INDEX and SHOW routes
- create seed file to seed (populate) the Database with dummy data
- add logic to INDEX and SHOW routes
- further styling changes
- add grid of recipes to index template and style accordingly
- hook up the INDEX route to the db so that all recipes in the db are displayed
- hook up the SHOW route to the db so that a recipe is displayed with all details eg ingredients, method, photo etc...
- style header and footer partials
- add links to footer 
- cut desciption strings (on each recipe) in the INDEX template so that the recipe grid spacing is all the same
- add .... to the cut strings so that they original string can be viewed (via javascript)

### 4th Commit - Add logic to DESTROY Route and update edit and new-recipe template logic
- Add Delete and Edit buttons to Show Template
- Add a form to the edit template and new recipe template including js logic
- Install npm package method override for put and delete requests
- Add logic to the delete route
- Update form logic (for new-recipe and edit-recipe templates)to use tagged inputs
