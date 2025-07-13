import React from 'react'
import RecipeList from './components/RecipeList'
import { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import './css/App.css'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  function handleRecipeAdd() {
  const newRecipe = {
    id:uuidv4(),
    name:"New",
    servings:1,
    cookTime:'1:00',
    instructions:"Instr.",
    ingredients: [
      {id:uuidv4(), name:'Name', amount:'1 Tbs'}
    ]
  }

  setRecipes([...recipes, newRecipe])
}

function handleRecipeDelete(id) {
  setRecipes(recipes.filter(recipe => recipe.id !== id ))

}
  return (
    <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete} />
  )
}



const sampleRecipes = [
  {
    id:1,
    name:"Plain Chicken",
    servings:3,
    cookTime:"1:45",
    instructions:"1. Put Salt on chicken\n2  2.Put chichen in oven\n3 3. eat chicken",
    ingredients: [
      {
        id:1,
        name:"Chicken",
        amount:"2 pound"
      },
      {
        id:2,
        name:"Chicken2",
        amount:"3 pound"
      }
    ]

  },
  {
    id:2,
    name:"Plain Chi3cken",
    servings:3,
    cookTime:"1:25",
    instructions:"1. Put Salt on chicken\n2  2.Put chichen in oven\n3 3. eat chicken",
     ingredients: [
      {
        id:1,
        name:"Chicdken",
        amount:"2 pouncd"
      },
      {
        id:2,
        name:"Chickven2",
        amount:"3 pocund"
      }
    ]

  }
]

export default App