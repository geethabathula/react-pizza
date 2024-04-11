import "./styles/styles.css";

function PizzaMenu(props) {
    const { id, name, ingredients, price, photoName, soldOut } = props.pizzaObj;
    return (

        <div className="pizzamenu-layout container-fluid">
            <img className="row pizza-image" src={photoName} alt={name} />
            <div className="row pizza-content">
                <ul>
                    <li className="col-6">{name}</li>
                    <li className="col-6">{ingredients}</li>
                    <li className="col-6">{price}</li>
                    <li className="col-6">{soldOut}</li>
                </ul>
            </div>
        </div>
    );
}

export default PizzaMenu;