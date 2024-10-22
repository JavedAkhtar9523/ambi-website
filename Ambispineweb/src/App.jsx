import "./App.css";
import About from "./components/About/About";
// import "./vibrant-career-styles.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Platform from "./components/Platform/Platform";
import Contact from "./components/Contacts/Contact";
import Career from "./components/Career/Career";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./components/Home/WhatsppIcon";
import TermsAndPrivacyPage from "./components/TermsPrivacy/TermsAndPrivacyPage";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import "./components/Theme/theme.css";
// import { useEffect } from "react";
// import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

// useEffect(() => {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme) {
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   }
// }, []);

function App() {
  return (
    <>
      <ThemeProvider>
        <ToastContainer />
        <BrowserRouter>
          <Header />
          <WhatsappIcon />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
