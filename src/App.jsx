import React from 'react'
import RecipeList from './components/RecipeList'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import './css/App.css'


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

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingwithreact.recipe"

function App() {
  const [recipes, setRecipes] = useState(() => {
  const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
  return recipeJSON != null ? JSON.parse(recipeJSON) : sampleRecipes
})


    useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))

  }, [])

  useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


const recipeContextValue = {
  handleRecipeAdd:handleRecipeAdd,
  handleRecipeDelete:handleRecipeDelete
}

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
<RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}  />

</RecipeContext.Provider>  )
}





export default App