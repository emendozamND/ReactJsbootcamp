import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  Input,
  FormGroup,
  Label,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { saveTaskToServer } from "./store/taskSlice";

function App() {
  const { list, loading } = useSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {

    if (taskInput) {
      dispatch(saveTaskToServer(taskInput));
      setTaskInput("")
    }
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>To Do List App</h1>

        <FormGroup>
          <Label for="taskInput">Task</Label>
          <Input
            id="taskInput"
            placeholder="Enter your task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            disabled={loading}
          />
        </FormGroup>

        <Button color="primary" onClick={handleAddTask} disabled={loading}>
          {loading ? "Loading..." : "Add Task"}
        </Button>

        <ListGroup style={{ marginTop: "20px" }}>
          {list.map((task, index) => (
            <ListGroupItem key={index}>{task.text}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default App;
