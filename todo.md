# Full Stack CRUD Assessment - todo

Week of 09/07.

## Server-Side

1. Create the project structure
1. Choose a resource (superheros, cats, dogs, etc.)
1. Create the RESTful route structure, based on the resource of your choice:
  - GET ALL superheros
  - GET single superhero
  - POST ALL superheros
  - PUT single superhero
  - DELETE single superhero
1. Setup MongoDB, Mongoose, and define your schema
1. Update each route to connect to the database and return JSON
1. Use [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables

## Client-Side

1. Render a single *index.html* file, which includes a form for adding (POST) a new superhero. Also, display ALL (GET) superheros below the form.
1. Handle client-side form validation with HTML5 attributes.s
1. Handle the form submission with jQuery. This must be a SPA (single page application)

## Deployment

1. Deploy to Heroku



## STEP BY STEP
1. yo galvanize-express
1. npm install
1. set up routes get all, get one, post all, put one, delete one
1. npm install mongoose --save
1. create models folder/ create js folder ('penquin.js') - Define schema and connect to mongoose
1. test json through postman or httpie:
   * http GET http://localhost:3000/penguins

   * http -f POST localhost:3000/penguins name=jack zoo=True nemesis=heat
   * http POST localhost:3000/penguins name=crystal zoo=true nemesis=heat

   * http PUT http://localhost:3000/penguin/55ef5bd25c01ee135290d282 name=johnny

   * http DELETE localhost:3000/penguin/55ef5ac75c01ee135290d281
1.---on hold---
  <place holder in penguin.js> ==
  * //setting uri mongodb://... to variable DB_HOST
  process.env.DB_HOST = 'mongodb://localhost/node-penguins';
---end on hold---
   * npm install dotenv --save
   * in models penguin.js >> var dotenv = require('dotenv').load();
   * create .env file in views and write at top= DB_HOST=mongodb://localhost/node-penguins
--- config file in routes DB_HOST (look up environment variables and you set up them such as "stage" "deployment" "test" etc)

1. set up index.html form
1. set up main.js under (get and post requests are ajax) client side while updating routes throughout

1. Deploy to Heroku


