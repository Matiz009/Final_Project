import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const [hNo, setHNo] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hNo,
        city,
        state,
        country,
        pinCode,
      },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        hNo,
        city,
        state,
        country,
        pinCode,
      })
    );
    navigate("/confirmOrder");
  };
  console.log(hNo, city, state, country, pinCode);
  return (
    <div>
      <section className="shipping">
        <main>
          <h1>Shipping Details</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label>House Number</label>
              <input
                type="text"
                required
                placeholder="Enter House No."
                value={hNo}
                onChange={(e) => setHNo(e.target.value)}
              />
            </div>
            <div>
              <label>Country</label>

              <select
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            {country && (
              <div>
                <label>State</label>
                <select
                  value={state}
                  required
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((i) => (
                      <option value={i.isoCode} key={i.isoCode}>
                        {i.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="Enter City"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label>Pin Code</label>
              <input
                type="number"
                placeholder="Enter Pin"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <button type="submit">Confirm Order</button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default Shipping;
