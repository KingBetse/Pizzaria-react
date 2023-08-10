import React from "react";
import { useEffect, useState } from "react";
import pizza from "./data";

import "./index.css";

const App = () => {
  const [pizzaMenu, setpizzaMenu] = useState([]);
  const getPizza = async () => {
    // console.log(typeof pizza);
    setpizzaMenu(pizza);
  };
  useEffect(() => {
    getPizza();
  }, []);
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="pizzas">
        {pizzaMenu ? (
          pizzaMenu.map((pizza) => <Pizza pizza={pizza} />)
        ) : (
          <p>We are Working in our menu</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

const Pizza = ({ pizza }) => {
  console.log(pizza.soldOut);
  return (
    <div className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
      {/* <div className="sold-out"> */}
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : `Price : ${pizza.price}`} </span>
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <header className="header">
      <h1>React Pizza Co</h1>
    </header>
  );
};
const Menu = () => {
  return (
    <main className="menu">
      <h2>Menu of the pizza </h2>
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closehour = 22;
  const isOpen = openHour <= hour && closehour >= hour;

  return (
    <footer className="footer">
      <h2>
        {isOpen ? (
          <Order closehour={closehour} />
        ) : (
          `we are closed ... we will open on ${openHour}`
        )}
      </h2>
    </footer>
  );
};
const Order = ({ closehour }) => {
  return (
    <div className="order">
      <p>We are Open until {closehour}:00 Come Visit Us or Order Online</p>
      <button className="btn">Order</button>
    </div>
  );
};

export default App;
