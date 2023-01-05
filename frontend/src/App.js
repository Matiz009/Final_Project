import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/about";
import Header from "./components/layouts/Header";
import Home from "./components/home/home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layouts/Footer";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Login from "./components/Login/login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/MyOrders/myOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import NotFound from "./components/layouts/NotFound";

//style sheets
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/footer.scss";
import "./styles/menu.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/OrderDetails.scss";
import "./styles/Dashboard.scss";
import "./styles/about.scss";
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
          <Route path="/confirmOrder" element={<ConfirmOrder />}>
            {" "}
          </Route>{" "}
          <Route path="/paymentSuccess" element={<PaymentSuccess />}>
            {" "}
          </Route>{" "}
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>{" "}
          <Route path="/me" element={<Profile />}>
            {" "}
          </Route>{" "}
          <Route path="/myOrders" element={<MyOrders />}>
            {" "}
          </Route>{" "}
          <Route path="/order/:id" element={<OrderDetails />}>
            {" "}
          </Route>{" "}
          <Route path="/admin/dashboard" element={<Dashboard />}>
            {" "}
          </Route>{" "}
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;
