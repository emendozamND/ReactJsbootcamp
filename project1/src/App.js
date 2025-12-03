import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addRecipe = (newRecipe) => {
    setLoader(true);

    setTimeout(() => {
      setRecipe((prev) => [...prev, newRecipe]);
      setLoader(false);
    }, 5000);
  };

  return (
    <>
      <RecipeForm addRecipe={addRecipe} loader={loader} />

      <RecipeList
        recipe={recipe}
        setSelectedRecipe={setSelectedRecipe}
        toggle={toggle}
      />

      {selectedRecipe && (
        <RecipeModal
          selectedRecipe={selectedRecipe}
          modal={modal}
          toggle={toggle}
        />
      )}
    </>
  );
}

export default App;