import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pic1 from "../../assets/bamboo.jpg";
import pic2 from "../../assets/croton.jpg";
import pic3 from "../../assets/philodendron.jpg";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      bambooPlant: { quantity: bambooPlant },
      crotonPlant: { quantity: crotonPlant },
      philodendronPlant: { quantity: philodendronPlant },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "bambooPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "crotonPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "philodendronPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
        dispatch({ type: "bambooPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (bambooPlant === 0) break;
        dispatch({ type: "bambooPlantDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (crotonPlant === 0) break;
        dispatch({ type: "crotonPlantDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (philodendronPlant === 0) break;
        dispatch({ type: "philodendronPlantDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
        if (bambooPlant === 0) break;
        dispatch({ type: "bambooPlantDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Bamboo Plant"}
          img={pic1}
          value={bambooPlant}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Croton Plant"}
          img={pic2}
          value={crotonPlant}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Philodendron Plant"}
          img={pic3}
          value={philodendronPlant}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>PKR {subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>PKR {tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>PKR {shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>PKR {total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
