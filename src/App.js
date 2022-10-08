import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Chefs from "./Pages/Chefs"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import Store from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Chefs" element={<Chefs />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}
export default App;