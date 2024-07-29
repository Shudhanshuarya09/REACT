// import FoodItem from "./FoodItems";
import styles from "./Item.module.css";
const Item = ({ foodItems, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItems} being bought`);
  // };

  //let { foodItem} = props;           concept of the array de-structuring
  // const Item = (foodItem) => {       concept next level de-structuring
  return (
    <li className={` ${styles["Kg-Item"]} list-group-item`}>
      <span className={styles["Kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info `}
        //onClick = {() => console.log(`${foodItems} being bought `)}
        onClick={handleBuyButton} //synthetic event concept
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
