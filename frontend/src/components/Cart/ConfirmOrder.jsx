import React from "react";

const ConfirmOrder = () => {
  return (
    <div>
      {" "}
      <section className="confirmOrder">
        <main>
          <h1>Confirm Order</h1>

          <form>
            <div>
              <label>Cash On Delivery</label>
              <input type="radio" name="payment" />
            </div>
            <div>
              <label>Online</label>
              <input type="radio" name="payment" />
            </div>

            <button type="submit">Place Order</button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default ConfirmOrder;
