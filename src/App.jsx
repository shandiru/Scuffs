// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/homepage"; // fixed relative path
import Alloywheelrepairpage from "./page/Alloywheelrepairpage"; // fixed relative path

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<Home />} />

          <Route path="/services/alloy-wheel-repair" element={<Alloywheelrepairpage />} />
        
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
