import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/layouts/Header";
import Home from "./components/home/home";
import Contact from "./components/Contact/Contact";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/footer.scss";
import "./styles/menu.scss";
import "./styles/contact.scss";
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
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;