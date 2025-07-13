import React, {useContext} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from '../App'

function Recipe(props) {
    const{
        id, name, cookTime, servings, instructions, ingredients
    } = props
    const {handleRecipeDelete} = useContext(RecipeContext)
  return (
    <div className='recipe'>
        <div className='recipe-header'>
            <h3 className='recipe-title'>{name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>Edit</button>
                <button className='btn btn--danger' onClick={() => handleRecipeDelete(id)}>Delete</button>
            </div>
        </div>
        <div>
            <span>
                Cook Time:
            </span>
            <span>{cookTime}</span>
        </div>
         <div>
            <span>
                Servings:
            </span>
            <span>{servings}</span>
        </div>
         <div>
            <span>
                Instructions:
            </span>
            <div>
                {instructions}
            </div>
            <div>
                <span>Ingredients</span>
                <div>
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recipe