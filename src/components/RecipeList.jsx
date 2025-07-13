import React from 'react'
import Recipe from './Recipe'


function RecipeList({recipes, handleRecipeAdd, handleRecipeDelete}) {
  return (
    <div className='recipe-list'>
  <div>
    {recipes.map(recipe => {
       return <Recipe {...recipe} key={recipe.id} handleRecipeDelete={handleRecipeDelete} />
    })}
  </div>
  <div className='recipe-add-btn-container'>
    <button className='btn btn--primary' onClick={handleRecipeAdd}>Add recipe</button>
  </div>
  </div>
  )
}

export default RecipeList