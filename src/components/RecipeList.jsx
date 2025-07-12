import React from 'react'
import Recipe from './Recipe'


function RecipeList({recipes}) {
  return (
    <div className='recipe-list'>
  <div>
    {recipes.map(recipe => {
       return <Recipe {...recipe} key={recipe.id} />
    })}
  </div>
  <div className='recipe-add-btn-container'>
    <button className='btn btn--primary'>Add recipe</button>
  </div>
  </div>
  )
}

export default RecipeList