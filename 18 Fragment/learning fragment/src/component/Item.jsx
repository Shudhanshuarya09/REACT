import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  //let { foodItem} = props;           concept of the array de-structuring
  // const Item = (foodItem) => {       concept next level de-structuring
  return (
    <li className={' ${styles["Kg-Item"]} list-group-item'}>
      <span className={styles["Kg-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
