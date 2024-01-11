// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"
// import React from "react";

// function App() {

//   return (
//     <React.Fragment>
//       <h1>Healthy Food</h1>
//     <ul class="list-group">
//   <li class="list-group-item active" aria-current="true">An active item</li>
//   <li class="list-group-item">A second item</li>
//   <li class="list-group-item">A third item</li>
//   <li class="list-group-item">A fourth item</li>
//   <li class="list-group-item">And a fifth one</li>
// </ul>
//     </React.Fragment>
//   )
// };

// export default App;

//same code written uper will be write in using short syntax of FRAGMENT and MAP METHOD concept

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {

//   let foodItems = ["DAL","PULSES","MEAT","EGG","CHICKEN","FISH","SPINACH"];

  


//   return (
//     <>
//       <h1>Healthy Food</h1>  
//       <ul className="list-group">
//         {foodItems.map((product) => (<li className="list-group-item">{product}</li>))}
//       </ul>
//     </>
//   );
// }

// export default App;


//same upper code written here describing the concept of if-else condition , Logical operator , terniary operator

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {

//   let foodItems = [   "DAL","","","","","","","",""      ];
//   //  IF-ELSE Condition 
//   // if (foodItems.length === 0) {
//   // return <h3>I am still Hungry.</h3>;
//   // }
//   // let emptMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;


//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {/* Terneary-opeartor */}
//        {/* { foodItems.length === 0 ? <h3>I am still Hungry</h3> : null};    */}
//        {/* Logical operator */}
//        {foodItems.length === 0 && <h3>I am still Hungry</h3>}
//        {/* {emptMessage} */}
//       <ul className="list-group">
//         {foodItems.map((product) => (<li className="list-group-item">{product}</li>))}
//       </ul>
//     </>
//   );
// }

// export default App;



//  Passing Data by Props

import "bootstrap/dist/css/bootstrap.min.css";
 import "./App.css";
 import FoodItems from "./Component/FoodItem";

 function App() {

   let foodItems = [   "DAL","","","","","","","",""      ];
   //  IF-ELSE Condition 
   // if (foodItems.length === 0) {
   // return <h3>I am still Hungry.</h3>;
   // }
   // let emptMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;


   return (
     <>
       <h1>Healthy Food</h1>
       
        { foodItems.length === 0 ? <h3>I am still Hungry</h3> : null};   
        
        {foodItems.length === 0 && <h3>I am still Hungry</h3>}
        
       <FoodItems></FoodItems>
     </>
   );
 }

 export default App;

