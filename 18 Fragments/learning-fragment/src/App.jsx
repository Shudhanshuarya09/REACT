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

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  let foodItems = ["CHICKEN","EGG","FISH","BUTTER","SPINACH","PULSES","PANEER","GREEN VEGETABLES"]
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map((item) => (<li class="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}

export default App;
