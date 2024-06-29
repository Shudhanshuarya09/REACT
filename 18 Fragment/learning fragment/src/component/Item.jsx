const Item = (props) => {

  //let { foodItem} = props;           concept of the array de-structuring
 // const Item = (foodItem) => {       concept next level de-structuring
  return (
    <li  className="list-group-item">
      {props.foodItem}
    </li>
  );
};
export default Item;
