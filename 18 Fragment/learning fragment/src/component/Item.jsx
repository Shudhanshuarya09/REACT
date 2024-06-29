import styles from "./Item.module.css";
const Item = (props) => {

  //let { foodItem} = props;           concept of the array de-structuring
 // const Item = (foodItem) => {       concept next level de-structuring
  return (
    <li  className={' ${stylesKgItem} list-group-item'}>
      <span className="Kg-span">{foodItem}</span>
    </li>
  );
};
export default Item;
