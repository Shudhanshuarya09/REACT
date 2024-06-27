import FoodItems from "./Component/FoodItems";
import ErrorMessage from "./Component/ErrorMessage";

export function App() {
  let foodItems = [
    "DAL",
    "PULSES",
    "MEAT",
    "EGG",
    "CHICKEN",
    "FISH",
    "SPINACH",
  ];
  //  IF-ELSE Condition
  // if (foodItems.length === 0) {
  // return <h3>I am still Hungry.</h3>;
  // }
  // let emptMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;
  return (
    <>
      <h1>Healthy Food</h1>

      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}
