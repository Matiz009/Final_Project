import React from "react";
const Shipping = () => {
  return (
    <div>
      <section className="shipping">
        <main>
          <h1>Shipping Details</h1>
          <form action="">
            <div>
              <label>House Number</label>
              <input type="text" placeholder="Enter House No." />
            </div>
            <div>
              <label>City</label>
              <input type="text" placeholder="Enter City" />
            </div>
            <div>
              <label>Pin Code</label>
              <input type="number" placeholder="Enter Pin" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="number" placeholder="Enter Phone Number" />
            </div>
          </form>
        </main>
      </section>
    </div>
  );
};

export default Shipping;
