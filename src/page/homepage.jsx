// App.jsx
// src/App.jsx

import Home from "../components/HomePage/HomeSection";
import Service from "../components/HomePage/ServicesSection";
import Gallery from "../components/HomePage/GallerySection";
import Credential from "../components/HomePage/CredentialsSection";
import Contact from "../components/HomePage/ContactSection";
import Testimonials from "../components/HomePage/Testimonial";




function App() {
  return (
    <>
   
     <Home />
     <Service />
     <Gallery />
     <Credential />
     <Testimonials />
     <Contact />
    
    </>
  );
}

export default App;
