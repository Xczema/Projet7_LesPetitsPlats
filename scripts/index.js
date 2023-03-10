import {recipes} from '../data/recipes.js';

displayRecipes(recipes);

function displayRecipes(recipes) {
    const searchResult = document.querySelector(".search-result");

    recipes.forEach((recipe) => {
        const recipeModel = buildCard(recipe);
        const recipeCardDOM = recipeModel.getUserCardDOM();
        searchResult.appendChild(recipeCardDOM);
    });
}

function buildCard(recipe) {
    const name = recipe.name;
    const time = recipe.time;
    const ingredients = recipe.ingredients;
    const description = recipe.description;
    const picture = 'assets/images/recipePicture.svg';
    const recipeLink = '#';

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement( 'a' );
        link.setAttribute("href", recipeLink)

        const imageRecipeWrapper = document.createElement( 'div' );
        imageRecipeWrapper.classList.add("imageRecipeWrapper");

        const imgRecipe = document.createElement( 'img' );
        imgRecipe.setAttribute("src", picture);
        imgRecipe.alt = "";

        const h2andTimeWrapper = document.createElement( 'div' );
        h2andTimeWrapper.classList.add("h2andTimeWrapper");

        const recipeName = document.createElement( 'h2' );
        recipeName.textContent = name;

        const timeWrapper = document.createElement( 'h2' );

        const recipeTime = document.createElement( 'p' );
        recipeTime.textContent = time + ' min';

        const ingredientsAndDescriptionWrapper = document.createElement( 'div' );
        ingredientsAndDescriptionWrapper.classList.add("ingredientsAndDescriptionWrapper");
        
        const recipeIngredients = document.createElement( 'ul' );
        // recipeIngredients.textContent = ingredient;
        ingredients.forEach(renderIngredientList);

        function renderIngredientList(element, index, arr) {
            let li = document.createElement('li');
            li.setAttribute('class','item');

            recipeIngredients.appendChild(li);
            console.log(element);
            console.log('pause');
            let t;
            t = document.createTextNode(element);
            li.innerHTML = li.innerHTML + element;
        }

        // const ingredient = ingredients.forEach((ingredient) => {
        //     let li = document.createElement('li');
        //     recipeIngredients
        //     console.log(ingredient);
    
        // });

        const recipeDescription = document.createElement( 'p' );
        recipeDescription.textContent = description;
        
        article.appendChild(link);
        imageRecipeWrapper.appendChild(imgRecipe);
        h2andTimeWrapper.appendChild(recipeName);
        h2andTimeWrapper.appendChild(timeWrapper);
        timeWrapper.appendChild(recipeTime);
        ingredientsAndDescriptionWrapper.appendChild(recipeIngredients);
        ingredientsAndDescriptionWrapper.appendChild(recipeDescription);
        link.appendChild(imageRecipeWrapper);
        link.appendChild(h2andTimeWrapper);
        link.appendChild(ingredientsAndDescriptionWrapper);
        return (article);
    }
    return { getUserCardDOM }
}
