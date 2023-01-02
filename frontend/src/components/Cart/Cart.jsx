import React from "react";
import bamboo from "../../assets/bamboo.jpg";

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
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese PLANT"}
          img={bamboo}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
      </main>
    </section>
  );
};

export default Cart;
