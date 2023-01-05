import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";
import contacts from "./Contact";

//Creating Contact App using Props and components

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    {
      <div>
        <h1 className="heading">My Contacts</h1>
        <Card
          name={contacts[0].name}
          img={contacts[0].img}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].img}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].img}
          tel={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>
    }
    <App />
  </React.StrictMode>
);

reportWebVitals();
