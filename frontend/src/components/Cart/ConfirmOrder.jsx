import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/actions/order";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
      console.log(
        shippingInfo,
        cartItems,
        paymentMethod,
        subTotal,
        tax,
        shippingCharges,
        total
      );
    }
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/PaymentSuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);
  console.log(shippingInfo);
  return (
    <div>
      {" "}
      <section className="confirmOrder">
        <main>
          <h1>Confirm Order</h1>

          <form onSubmit={submitHandler}>
            <div>
              <label>Cash On Delivery</label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("COD")}
                required
              />
            </div>
            <div>
              <label>Online</label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("COD")}
              />
            </div>

            <button type="submit" disabled={disableBtn}>
              Place Order
            </button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default ConfirmOrder;
