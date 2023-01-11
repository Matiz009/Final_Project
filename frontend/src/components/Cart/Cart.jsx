import React from "react";
import { useSelector } from "react-redux";
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
      philodedronPlant: { quantity: philodedronPlant },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const increment = (item) => {};

  const decrement = (item) => {};

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
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Philodedron Plant"}
          img={pic3}
          value={philodedronPlant}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
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
