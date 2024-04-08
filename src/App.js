import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <h1>Pizzeria !!!!</h1>
      <h3>Welcome...Here is the Menu</h3>
      <PizzaMenu />
    </div>
  );
}

function PizzaMenu() {
  return (
    <ol>
      <li>Cheese Pizza</li>
      <li>Chicken Pizza</li>
      <li>Panner Pizza</li>
    </ol>
  );
}

export default App;
