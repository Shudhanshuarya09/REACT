const ErrorMessage = () => {

  let foodItems = [
    "DAL",
    "PULSES",
    "MEAT",
    "EGG",
    "CHICKEN",
    "FISH",
    "SPINACH",
  ];

  return <>{ foodItems.length === 0 ? <h3>I am still Hungry</h3> : null};   
        
  //{foodItems.length === 0 && <h3>I am still Hungry</h3>}</>
}

export default ErrorMessage;