import React from 'react'
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id:1,
    name:"Plain Chicken",
    servings:3,
    cookTime:"1:45",
    instructions:"1. Put Salt on chicken\n2  2.Put chichen in oven\n3 3. eat chicken"

  },
  {
    id:2,
    name:"Plain Chi3cken",
    servings:3,
    cookTime:"1:25",
    instructions:"1. Put Salt on chicken\n2  2.Put chichen in oven\n3 3. eat chicken"

  }
]

export default App