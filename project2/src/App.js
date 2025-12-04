
import './App.css';  /* Importar estilos */
import { useState, useReducer, useEffect } from "react"; /* importar 3 hooks */
import { Input, Label, FormGroup } from 'reactstrap'
function App() {
  const [name, setName] = useState("");
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);




  useEffect(() => {
    if (name) {
      dispatch({ type: "increment" })
    }
  }, [name]);

  return (
    <>
      <p>Name updates {count} times</p>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input value={name} type="text" onChange={(e) => setName(e.target.value)}></Input>
      </FormGroup>
    </>
  );
}

export default App;
