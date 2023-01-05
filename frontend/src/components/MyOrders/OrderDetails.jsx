import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Pattoki"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Mati ul Rehman"}
          </p>
          <p>
            <b>Phone</b>
            {3147606860}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-12-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-01-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-01-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>PKR {2132}
          </p>
          <p>
            <b>Shipping Charges</b>PKR {200}
          </p>
          <p>
            <b>Tax</b>PKR {232}
          </p>
          <p>
            <b>Total Amount</b>PKR {232 + 200 + 2132}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Bamboo Plant</h4>
            <div>
              <span>{12} </span> x <span>{12} </span>
            </div>
          </div>
          <div>
            <h4>Croton Plant</h4>
            <div>
              <span>{16} </span> x <span>{12} </span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              PKR {2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
