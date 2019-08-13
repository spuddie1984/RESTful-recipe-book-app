const mongoose = require( 'mongoose' ),
      Recipe = require( './app.js' )

const seeds = [{
    title: `Mexican potatoes`,
    category: [`mexican`,`vegetarian`,`potato`],
    image:`https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--219594_11.jpg?itok=10veQZSm`,
    description: `Spicy fried potatoes with soured cream for dipping, great as part of a Tex-Mex meal`,
    ingredients: {
        subList: {subIngredients:""},
        ingredients: [`800g potato, cut into cubes`,`1 tbsp olive oil`,`1 onion, finely chopped`,`1 garlic clove, finely chopped`,`½ tsp mild chilli powder`,`½ tsp paprika`,`1 tsp cumin`,`½ tsp cayenne pepper`,`soured cream, to serve`],
    },
    method: [`Boil the potatoes for 5 mins. Meanwhile, heat the oil in a frying pan and gently fry the onion for 8 mins. Add the garlic and spices, then fry for 2 mins more.`, `Drain the potatoes and tip into the onion mix. Turn up the heat and shake the potatoes around so that they are all covered. Cook for 10 mins more until tender, then serve with soured cream, sprinkled with a little cayenne.`],
},{
    title: `Mexican bake`,
    category: [`mexican`,`vegetarian`],
    image:`https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1096460_11.jpg?itok=LCx-8aST`,
    description: `Raid your storecupboard and try out this fresh idea for canned beans with fajita spices - top with tortillas and cheese`,
    ingredients: {
        subList: {subIngredients:""},
        ingredients: [`2 x 400g cans black beans, drained and rinsed`,`35g sachet fajita seasoning of your choice`,`2 x 400g cans chopped tomatoes with chilli`,`6 tortillas`,`140g Monterey Jack cheese or cheddar, grated`],
    },
    method: [`Heat oven to 180C/160C fan/gas 4. Heat a non-stick frying pan, add the black beans and fajita spice mix, stir together and cook for 1-2 mins. Add the tomatoes and simmer over a low heat for 10 mins.`, `Cut the tortillas in half. Lightly grease a 2-litre baking dish. Spread a third of the bean mixture over the base of the dish, followed by 3 tbsp of the cheese and a layer of tortillas. Repeat the process, finishing with a tortilla layer on top. Sprinkle over the remaining cheese. Bake for 15 mins until golden.`],
},{
    title: `Chicken noodle soup`,
    category: [`soup`,`chicken`],
    image:`https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/05/recipe-image-legacy-id-1035613_10.jpg?itok=ebIUvW6b`,
    description: `Mary Cadogan's aromatic broth will warm you up on a winter's evening - it contains ginger, which is particularly good for colds, too`,
    ingredients: {
        subList: {subIngredients:""},
        ingredients: [`900ml chicken or vegetable stock (or Miso soup mix)`,`1 boneless, skinless chicken breast, about 175g/6oz`,`1 tsp chopped fresh root ginger`,`1 garlic clove, finely chopped`,`50g rice or wheat noodles`,`2 tbsp sweetcorn, canned or frozen`,`2-3 mushrooms, thinly sliced`,`2 spring onions, shredded`,`2 tsp soy sauce, plus extra for serving`,`mint or basil leaves and a little shredded chilli (optional), to serve`],
    },
    method: [`Pour 900ml chicken or vegetable stock into a pan and add 1 boneless, skinless chicken breast, 1 tsp chopped root ginger and 1 finely chopped garlic clove.`, `Bring to the boil, then reduce the heat, partly cover and simmer for 20 mins, until the chicken is tender.`,`Remove the chicken to a board and shred into bite-size pieces using a couple of forks.`,`Return the chicken to the stock with 50g rice or wheat noodles, 2 tbsp sweetcorn, 2-3  thinly sliced mushrooms, 1 shredded spring onion and 2 tsp soy sauce.`,`Simmer for 3-4 mins until the noodles are tender.`,`Ladle into two bowls and scatter over the remaining shredded spring onion, mint or basil leaves and shredded chilli if using. Serve with extra soy sauce for sprinkling.`],
},{
    title: `One-pot mushroom & potato curry`,
    category: [`mushroom`,`potato`,`curry`],
    image:`https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--339051_11.jpg?itok=eMt7DEfu`,
    description: `Create a tasty, spicy vegetarian dish with mushroom and curry in less than half an hour`,
    ingredients: {
        subList: {subIngredients:""},
        ingredients: [`1 tbsp oil`,`1 onion, roughly chopped`,`1 large potato, chopped into small chunks`,`1 aubergine, trimmed and chopped into chunks`,`250g button mushrooms`,`2-4 tbsp curry paste (depending on how hot you like it)`,`150ml vegetable stock`,`400ml can reduced-fat coconut milk`,`chopped coriander, to serve`],
    },
    method: [`Heat the oil in a large saucepan, add the onion and potato. Cover, then cook over a low heat for 5 mins until the potatoes start to soften. Throw in the aubergine and mushrooms, then cook for a few more mins.`, `Stir in the curry paste, pour over the stock and coconut milk. Bring to the boil, then simmer for 10 mins or until the potato is tender. Stir through the coriander and serve with rice or naan bread.`],
}]

for(seed of seeds){
    Recipe.create({
        title: seed.title,
        category: seed.category,
        image: seed.image,
        description: seed.description,
        ingredients: {
            subList: {
                subIngredients: seed.ingredients.subList,
            },
            ingredients: seed.ingredients.ingredients,
        },
        method: seed.method,
    }, (err,recipe) => {
        if(err){
            console.log(err)
        } else {
            console.log(`You successfully added ${recipe.title} to the database`)
        }
    })
}
