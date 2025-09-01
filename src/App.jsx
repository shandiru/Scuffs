// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/homepage"; // fixed relative path
import Quality from "./page/Quality";
import Alloywheelrepairpage from "./page/Alloywheelrepairpage";
import Bodyworkrepairpage from "./page/Bodyworkrepairpage";
import  Texturedplasticrepairpage from "./page/Texturedplasticrepairpage"


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<Home />} />
          <Route path="/services/alloy-wheel-repair" element={<Alloywheelrepairpage />} />
          <Route path="/services/quality-guarantee" element={<Quality />} />
           <Route path="/services/bodywork-repair" element={<Bodyworkrepairpage />} />
            <Route path="/services/textured-plastic-repair" element={<Texturedplasticrepairpage />} />
        


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;