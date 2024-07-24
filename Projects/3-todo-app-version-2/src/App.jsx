import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "1/3/23",
    },
    {
      name: "Go to SLIET",
      dueDate: "30/6/24",
    },
    {
      name: "unlike this video",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
