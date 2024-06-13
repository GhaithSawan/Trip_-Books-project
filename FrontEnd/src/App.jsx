import React from "react";
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Activities from "./Components/Activities";
import Booking from "./Components/Booking";
import Gallery from "./Components/Gallery.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import AdminPage from "./page/AdminPage.jsx";
import StripsList from "./Components/Admin/ProductsList/StripsList.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/AdminPage" element={<AdminPage/>} />
          <Route path="/AdminPage/StripsList" element={<StripsList/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
