 const FoodItems = () => {

let foodItems = ["DAL","PULSES","MEAT","EGG","CHICKEN","FISH","SPINACH"];
  return (
    <ul className="list-group">
        {foodItems.map((product) => (<li className="list-group-item">{product}</li>))}
       </ul>
  );


 };
 export default FoodItems; 