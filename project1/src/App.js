import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState, useReducer } from "react";
import { button } from 'reactstrap';
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";
import { Button } from "reactstrap";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modal, setModal] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
      case "RESET":
        return { count: 0 }



    }
  }
  const initialState = {
    count: 0
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = () => setModal(!modal);

  const addRecipe = (newRecipe) => {
    setLoader(true);

    setTimeout(() => {
      setRecipe((prev) => [...prev, newRecipe]);
      setLoader(false);
    }, 5000);
  };
  useEffect(() => {
    console.log("recipe is added");
  }, [recipe]);
  return (
    <>
      <p>Count:{state.count}</p>
      <button className="btn btn-primary" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className="btn btn-secondary" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <Button className="btn btn-danger" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
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