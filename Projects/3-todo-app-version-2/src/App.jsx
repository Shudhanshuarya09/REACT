import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
// import TodoItem1 from "./Components/TodoItem1";
//import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
import TodoItem from "./Components/TodoItem";

function App() {

  const todoItems = [{
    name : "Buy Milk",
    dueDate : 30/6/24,
  },
  {
    name : "Go to SLIET",
    dueDate : 30/6/24,
  }
];
  return (
    <center class="todo container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="4/10/24" todoName="Pulses"></TodoItem>
        {/* <TodoItem1 /> */}
        <TodoItem todoDate="4/10/24" todoName="Go to SLIET"></TodoItem>
        {/* <TodoItem2 /> */}
        <TodoItem todoDate="4/10/24" todoName="Go to Gym"></TodoItem>
      </div>
    </center>
  );
}

export default App;
