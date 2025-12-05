// src/App.js
import "./App.css";
import { useState, useReducer, useEffect } from "react";
import { Input, Label, FormGroup } from "reactstrap";
import Demo from "./components/Demo";
import { useNameContext } from "./Context/NameContext";

// ✅ reducer definido fuera del componente
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

function App() {
  const [name, setName] = useState("");
  const { handleName } = useNameContext(); // 👈 ahora sí es una función
  const [count, dispatch] = useReducer(reducer, 0);

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);        // estado local
    handleName(newName);     // estado en contexto
  };

  useEffect(() => {
    if (name) {
      dispatch({ type: "increment" });
    }
  }, [name]);

  return (
    <>
      <p>Name updates {count} times</p>

      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          type="text"
          onChange={handleChange}
        />
      </FormGroup>

      <Demo />
    </>
  );
}

export default App;
