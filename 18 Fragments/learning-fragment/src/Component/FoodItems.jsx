const FoodItems = () => {
  // let foodItems = [
  //   "DAL",
  //   "PULSES",
  //   "MEAT",
  //   "EGG",
  //   "CHICKEN",
  //   "FISH",
  //   "SPINACH",
  // ];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul>
  );
};
export default FoodItems;
