 import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./component/FoodItem";
import ErrorMessage from "./component/ErrorMessage";

function App() {
 
let foodItems = ["Dal", "Rice", "Spinach", "Fruits", "Vegetable"];
  return (
    <>
    <h1>Healthy Food</h1>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodItems items = {foodItems}></FoodItems>
    </>   
  );
}

export default App;
