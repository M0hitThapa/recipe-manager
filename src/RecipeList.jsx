import React from 'react'
import Recipe from './Recipe'

function RecipeList({recipes}) {
  return (
  <div>
    {recipes.map(recipe => {
       return <Recipe {...recipe} key={recipe.id} />
    })}
  </div>
  )
}

export default RecipeList