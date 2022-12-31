import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/layouts/Header";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
