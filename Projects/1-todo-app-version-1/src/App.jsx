import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddTodo/>
      <AddTodo/>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            5/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      
      
      
        <div class="row">
          <div class="col-6">
            Go to college
          </div>
          <div class="col-4">
            5/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
