import AppName from "./Components/AppName";
function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

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
      </div>
      
      <div class="container text-center">
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
