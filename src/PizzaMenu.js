import "./styles/styles.css";

function PizzaMenu(props) {
    const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;
    const cssSoldOut = soldOut ? "sold-out" : ""
    return (
        <div>
            <div className={`pizzamenu-layout ${cssSoldOut} container-fluid`}>
                <img className={`row pizza-image ${cssSoldOut}`} src={photoName} alt={name} />
                <div className="row pizza-content">
                    <ul>
                        <li className="col-6">{name}</li>
                        <li className="col-6">{ingredients}</li>
                        <li className="col-6">{soldOut ? "SOLD OUT" : price}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PizzaMenu;