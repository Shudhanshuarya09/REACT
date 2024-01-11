 const FoodItems = () => {

  return (
    <ul className="list-group">
        {FoodItems.map((product) => (<li className="list-group-item">{product}</li>))}
       </ul>
  );


 };
 export default FoodItems; 