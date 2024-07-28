import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnClick = (event) => {             //method call for onChange event
    console.log(event.target.value);             //.target.value karke exact value show krega ki kya change horha hai
  };
  return (
    <input
      type="text"
      placeholder="Enter the name of food"
      className={styles.foodInput}
      onChange={handleOnClick}
    />
  );
};
export default FoodInput;
