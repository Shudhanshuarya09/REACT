import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./component/FoodItem";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";

function App() {
  let foodItems = ["Dal", "Rice", "Spinach", "Fruits", "Vegetable"];
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
    </Container>
  );
}

export default App;
