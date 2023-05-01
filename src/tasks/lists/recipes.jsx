import { recipes } from './_recipesData.js';
import { Fragment } from 'react'

export default function RecipeList() {
  
  const recipesList = recipes.map(recipe => {
    const ingredients = recipe.ingredients.map(
      (ingradient, i) => <li key={i}>
        {ingradient}
      </li>
    )

    return <Fragment key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>{ingredients}</ul>
    </Fragment>
  })
  
  return (
    <div>
      <h1>Recipes</h1>
      {recipesList}
    </div>
  );
}
