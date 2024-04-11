import "./styles/styles.css";
import PizzaMenu from "./PizzaMenu";
import { pizzaData } from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pre-container">
        <div className="container">
          <div className="menu-layout">
            {pizzaData.map(pizza => <PizzaMenu pizzaObj={pizza} key={pizza.name} />)}
          </div>
        </div>
      </div>

      <OpenClose />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="header-title-pizzeria">Pizzeria</h1>
      <h6 className="header-subtitle">Our Menu</h6>
      <h6 className="header-glance">Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</h6>
    </div>
  );
}

function OpenClose() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div >
      {isOpen ? (
        <div className="order">
          <p className="openclose">
            We're open until {closeHour}:00. Come visit or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p className="openclose">
          We're closed. Please visit us between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p><sup>&#169;</sup> Geetha Supriya Bathula, 2024.</p>
    </div>
  );
}

export default App;
