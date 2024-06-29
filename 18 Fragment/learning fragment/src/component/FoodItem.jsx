const FoodItems = () => {
  return (
    <ul className="list-group">
      {FoodItems.map((item) => (
        <Item key={item}fooditem={Item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
