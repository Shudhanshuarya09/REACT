import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Rice", "Spinach", "Fruits", "Vegetable"];

  // let textToShow = textStateArr[0];             
  // let setTextState = textStateArr[1];
  let [ textToShow, setTextState ] = useState("Food Item Entered by user");        //De-structuring
  console.log(`Current value of textState:${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      // fragments use beacuse it allow to write two container in app.jsx
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of the healthy foods for the godd health and well
          being
        </p>
      </Container>
    </>
  );
}

export default App;
