import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={Home</</ />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

      {/* ✅ Tailwind Test Code - Responsive Background Fix */}
      <div className="bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-red-500 p-4 text-white text-center text-xl font-bold">
        
      </div>
    </BrowserRouter>
  );
}

export default App;