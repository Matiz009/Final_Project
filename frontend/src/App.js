import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/layouts/Header";
import Home from "./components/home/home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layouts/Footer";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
//style sheets
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/footer.scss";
import "./styles/menu.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>{" "}
          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>{" "}
          <Route path="/cart" element={<Cart />}>
            {" "}
          </Route>{" "}
          <Route path="/shipping" element={<Shipping />}>
            {" "}
          </Route>{" "}
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;