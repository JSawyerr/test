import React from "react";
import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Home/>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
    </Routes>
  );
}





// import Sample from './Sample'

// function App(){
//   return (
//     <div>
//       Function component examples
//       <Sample/>
//     </div>
//   )
// }



export default App;
