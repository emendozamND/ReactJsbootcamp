import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </>
  );
}

export default App;
