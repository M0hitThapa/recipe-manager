import React from 'react'
import Ingredient from './Ingredient'

function IngredientList({ ingredients}) {
    const ingredientElement = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient} />
    })
  return (
    <div>
        {ingredientElement}
    </div>
  )
}

export default IngredientList