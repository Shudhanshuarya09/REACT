import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./component/FoodItem";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";

function App() {
  let foodItems = ["Dal", "Rice", "Spinach", "Fruits", "Vegetable"];
  return (
     <> // fragments use beacuse it allow to write two container in app.jsx
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput></FoodInput>
      <FoodItem items={foodItems}></FoodItem>
    </Container>

    <Container>
      <p>Above is the list of the healthy foods for the godd health and well being</p>
    </Container>
  </>
  );
}

export default App;
