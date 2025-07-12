import React from 'react'
import RecipeList from './components/RecipeList'
import './css/App.css'

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