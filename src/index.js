import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
      // Create a React App which greets you based upon a specfic time of day.
      //Show a single h1 that says "Good morning" if between midnight and 12PM.
      //or "Good Afternoon" if between 12PM and 6PM.
      //or "Good evening" if between 6PM and midnight.
      //Apply the "heading" style in the styles.css
      //Dynamically change the color of the h1 using inline css styles.
      //Morning = red, Afternoon = green, Night = blue.
const root = ReactDOM.createRoot(document.getElementById("root"));
const date = new Date();
let greeting;
let color;
const name = 'Uzair';
const hours = date.getHours();
if (hours>=0 && hours<12) {
  greeting = "Good morning";
  color = "red";
} else if (hours>=12 && hours<18) {
  greeting = "Good afternoon";
  color = "green";
} else {
  greeting = "Good evening";
    color='blue';
}  

root.render( 
  <React.StrictMode>
    {
      <h1 className="heading" style= {{color:color}}> {greeting} {name}</h1>
    }
    <App />
  </React.StrictMode>
);


reportWebVitals();
