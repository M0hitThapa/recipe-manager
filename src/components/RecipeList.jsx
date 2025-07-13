import React, {useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from '../App'


function RecipeList({recipes}) {
  const {handleRecipeAdd} = useContext(RecipeContext)
  return (
    <div className='recipe-list'>
  <div>
    {recipes.map(recipe => {
       return <Recipe {...recipe} key={recipe.id} />
    })}
  </div>
  <div className='recipe-add-btn-container'>
    <button className='btn btn--primary' onClick={handleRecipeAdd}>Add recipe</button>
  </div>
  </div>
  )
}

export default RecipeList