const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item}fooditem={Item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
