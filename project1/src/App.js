
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { useState } from 'react';
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
function App() {
  const [name, setName] = useState("Elias");
  const [recipe, setRecipe] = useState([
    {
      title: 'Biryani',
      description: 'rice',
    },
    {
      title: 'Pizza',
      description: 'cheese',
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipe([...recipe, newRecipe]);
  }
  return (
    <>
      <h1>name: {name}</h1>
      <RecipeForm />
      <RecipeList recipe={recipe} />
    </>
  );
}

export default App;
