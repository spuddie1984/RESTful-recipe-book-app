# RESTful-recipe-book-app
A RESTful Recipe App to collect my favourite recipes so i can view them for later use - Based on Colt Steele's Web Developer Bootcamp

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