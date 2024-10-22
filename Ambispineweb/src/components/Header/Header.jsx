// import React, { useState } from "react";
// import { PiTrademarkLight } from "react-icons/pi";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosSearch, IoMdClose } from "react-icons/io";
// import { IoGlobeOutline } from "react-icons/io5";
// import "./Header.css";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../../Images/AmbiSpine_logo.png";
// import { FaLongArrowAltRight } from "react-icons/fa";

// function Header() {
//   const location = useLocation();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const isHomeOrContact =
//     location.pathname === "/" || location.pathname === "/contact";

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg position-fixed top-0 w-100"
//         style={{ backgroundColor: "black" }}
//       >
//         <div className="container-fluid">
//           <div
//             className="navbar-brand d-flex align-items-center ms-4"
//             style={{
//               height: "70px",
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <Link to="/">
//               <img
//                 src={logo}
//                 width="150"
//                 className="h-100"
//                 alt="AmbiSpine Logo"
//               />
//             </Link>
//             <PiTrademarkLight className="fs-5 trade-mark" />
//           </div>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span
//               className="navbar-toggler-icon"
//               style={{ zIndex: "1", color: "#fff" }}
//             ></span>
//           </button>

//           <div
//             className="collapse navbar-collapse"
//             id="navbarNav"
//             style={{ display: "flex", justifyContent: "space-around" }}
//           >
//             <ul className="navbar-nav mb-2 fs-8 text-white mb-lg-0 text-center">
//               <li className="nav-item mx-2">
//                 <Link to="/" className="nav-link text-white fw-medium">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item dropdown mx-2 hover-dropdown">
//                 {/* <Link
//                   to="/"
//                   className="nav-link text-white fw-medium dropdown-toggle"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 > */}
//                 <Link
//                   to="/"
//                   className="nav-link text-white fw-medium dropdown-toggle"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Who We Are
//                   <FaChevronDown
//                     style={{ marginLeft: "5px", fontSize: "0.8em" }}
//                   />
//                 </Link>
//                 {/* Dropdown menu content */}
// <div
//   className="dropdown-menu modern-dropdown"
//   aria-labelledby="navbarDropdown"
// >
//   <div className="mega-content">
//     <div className="about-section">
//       <h3 className="section-title">What We Are</h3>
//       <hr />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Doloremque, recusandae facilis dolores delectus
//           voluptatum alias quisquam nihil perferendis ullam
//           iusto non accusantium, facere minima, iure
//           voluptatibus nemo porro culpa aliquam.
//         </p>
//         <button className="explore-btn">
//           <Link to="/aboutus">Explore Now</Link>
//           <FaLongArrowAltRight
//             style={{ color: "#fff", marginLeft: "4px" }}
//           />
//         </button>
//       </div>
//     </div>
//     <div className="services-section">
//       <h3 className="section-title">View Services</h3>
//       <hr />
//       {/* <div className="services-content">
//         <h3>
//           <Link to="/platform">Platform</Link>
//         </h3>
//         <h3>
//           <Link to="/career">Career</Link>
//         </h3>
//       </div> */}
//       <div className="services-content">
//         <h3 className="platform-dropdown-wrapper">
//           <Link to="/platform" className="platform-link">
//             Platform
//             <div className="platform-dropdown">
//               <div className="platform-content">
//                 <div className="platform-item">
//                   <h4>Spread</h4>
//                   <p>Coming Soon</p>
//                 </div>
//                 <div className="platform-item">
//                   <h4>Ambispine Web Solution</h4>
//                   <p>Coming Soon</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </h3>
//         <h3>
//           <Link to="/career">Career</Link>
//         </h3>
//       </div>
//     </div>
//   </div>
// </div>
//               </li>
//               <li className="nav-item mx-2">
//                 <Link to="/product" className="nav-link text-white fw-medium">
//                   Products
//                 </Link>
//               </li>
//               <li className="nav-item mx-2">
//                 <Link to="/career" className="nav-link text-white fw-medium">
//                   Career
//                 </Link>
//               </li>
//               <li className="nav-item mx-2">
//                 <Link to="/contact" className="nav-link text-white fw-medium">
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             <ul className="navbar-nav-2 mb-2 fs-8 text-white mb-lg-0 text-center">
//               <li className="nav-item mx-2 search-container">
//                 <IoIosSearch
//                   className="text-white fw-medium search-icon"
//                   style={{
//                     marginTop: "12px",
//                     fontSize: "22px",
//                     cursor: "pointer",
//                   }}
//                   onClick={toggleSearch}
//                 />
//                 <div className={`search-box ${isSearchOpen ? "show" : ""}`}>
//                   <form className="search-form">
//                     <input type="text" placeholder="Search..." />
//                     <button type="submit" className="search-submit">
//                       <IoIosSearch />
//                     </button>
//                     <button
//                       type="button"
//                       className="search-close"
//                       onClick={toggleSearch}
//                     >
//                       <IoMdClose />
//                     </button>
//                   </form>
//                 </div>
//               </li>
//               <li className="nav-item mx-2">
//                 <IoGlobeOutline
//                   className="text-white fw-medium"
//                   style={{ marginTop: "12px", fontSize: "22px" }}
//                 />
//               </li>
//               {/* <li className="nav-item signin mx-2">
//                 <Link to="/signin" className="nav-link text-white fw-medium">
//                   Sign In
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* {location.pathname !== "/" && (
//         <div className="container-2">
//           <ul className="content">
//             <li>
//               <Link to="/overview">Overview</Link>
//             </li>
//             <li>
//               <Link to="/platform">Platform</Link>
//             </li>
//             <li>
//               <Link to="/career">Career</Link>
//             </li>
//           </ul>
//         </div>
//       )} */}
//       {!isHomeOrContact && (
//         <div className="container-2">
//           <ul className="content">
//             <li>
//               <Link to="/overview">Overview</Link>
//             </li>
//             <li>
//               <Link to="/platform">Platform</Link>
//             </li>
//             <li>
//               <Link to="/career">Career</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;

// -----------------------------------------

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosSearch, IoMdClose } from "react-icons/io";
// import { IoGlobeOutline } from "react-icons/io5";
// import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
// import logo from "../../Images/AmbiSpine_logo.png";
// import "./Header.css";

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

//   const isHomeOrContact =
//     location.pathname === "/" ||
//     location.pathname === "/contact" ||
//     location.pathname === "/career" ||
//     location.pathname === "/aboutus";

//   return (
//     <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
//       <nav className="header__nav">
//         <Link to="/" className="header__logo">
//           <img src={logo} alt="AmbiSpine Logo" className="header__logo-img" />
//           <span className="header__logo-text">AmbiSpine</span>
//         </Link>

//         <div className="header__menu">
//           <NavLink to="/">Home</NavLink>
//           <div className="header__dropdown">
//             <button className="header__dropdown-btn">
//               Who We Are <FaChevronDown className="header__dropdown-icon" />
//             </button>
//             <div className="header__dropdown-content">
//               <Link to="/aboutus" className="header__dropdown-link">
//                 About Us
//               </Link>
//               <Link to="/platform" className="header__dropdown-link">
//                 Platform
//               </Link>
//               <Link to="/career" className="header__dropdown-link">
//                 Career
//               </Link>
//             </div>
//           </div>
//           <NavLink to="/product">Products</NavLink>
//           <NavLink to="/career">Career</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>

//         <div className="header__actions">
//           <button onClick={toggleSearch} className="header__action-btn">
//             <IoIosSearch className="header__action-icon" />
//           </button>
//           <button className="header__action-btn">
//             <IoGlobeOutline className="header__action-icon" />
//           </button>
//           <Link to="/signin" className="header__signin-btn">
//             Sign In
//           </Link>
//         </div>
//       </nav>

//       {isSearchOpen && (
//         <div className="header__search">
//           <form className="header__search-form">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="header__search-input"
//             />
//             <button type="submit" className="header__search-submit">
//               <IoIosSearch className="header__search-icon" />
//             </button>
//           </form>
//         </div>
//       )}

//       {!isHomeOrContact && (
//         <div className="header__subnav">
//           <div className="header__subnav-content">
//             <NavLink to="/overview" className="header__subnav-link">
//               Overview
//             </NavLink>
//             <NavLink to="/platform" className="header__subnav-link">
//               Platform
//             </NavLink>
//             <NavLink to="/career" className="header__subnav-link">
//               Career
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// const NavLink = ({ to, children }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link
//       to={to}
//       className={`header__nav-link ${
//         isActive ? "header__nav-link--active" : ""
//       }`}
//     >
//       {children}
//     </Link>
//   );
// };

// export default Header;

// pppppp

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";
import {
  FaChevronDown,
  FaBars,
  FaLongArrowAltRight,
  FaArrowRight,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../Images/AmbiSpine_logo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/languageSlice";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    setIsLanguageMenuOpen(false);
  };
  const [isPlatformHovered, setIsPlatformHovered] = useState(false);

  const isHomeOrContact =
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/career" ||
    location.pathname === "/aboutus" ||
    location.pathname === "/product";

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          <img
            src={logo}
            alt="AmbiSpine Logo"
            className="header__logo-img"
            width={500}
          />
          {/* <span className="header__logo-text">AMBISPINE</span> */}
        </Link>

        <div
          className={`header__menu ${
            isMobileMenuOpen ? "header__menu--open" : ""
          }`}
        >
          <NavLink to="/" onClick={toggleMobileMenu}>
            Home
          </NavLink>
          {/* <div className="header__dropdown">
            <button className="header__dropdown-btn">
              Who We Are <IoMdArrowDropdown className="header__dropdown-icon" />
            </button>
            <div className="header__dropdown-content">
              <Link
                to="/aboutus"
                className="header__dropdown-link"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link
                to="/platform"
                className="header__dropdown-link"
                onClick={toggleMobileMenu}
              >
                Platform
              </Link>
              <Link
                to="/career"
                className="header__dropdown-link"
                onClick={toggleMobileMenu}
              >
                Career
              </Link>
            </div>
          </div> */}
          {/* ============================ */}
          {/* <div className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link text-white fw-medium dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Who We Are
              <FaChevronDown style={{ marginLeft: "5px", fontSize: "0.8em" }} />
            </Link>
            <div
              className="dropdown-menu modern-dropdown"
              aria-labelledby="navbarDropdown"
            >
              <div className="mega-content">
                <div className="about-section">
                  <h3 className="section-title">What We Are</h3>
                  <hr />
                  <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, recusandae facilis dolores delectus voluptatum
                      alias quisquam nihil perferendis ullam iusto non
                      accusantium, facere minima, iure voluptatibus nemo porro
                      culpa aliquam.
                    </p>
                    <button className="explore-btn">
                      <Link to="/aboutus" onClick={toggleMobileMenu}>
                        Explore Now
                      </Link>
                      <FaLongArrowAltRight
                        style={{ color: "#fff", marginLeft: "4px" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="services-section">
                  <h3 className="section-title">View Services</h3>
                  <hr />
                  <div className="services-content">
                    <h3 className="platform-dropdown-wrapper">
                      <Link
                        to="/platform"
                        className="platform-link"
                        onClick={toggleMobileMenu}
                      >
                        Platform
                        <div className="platform-dropdown">
                          <div className="platform-content">
                            <div className="platform-item">
                              <h4>Spread</h4>
                              <p>Coming Soon</p>
                            </div>
                            <div className="platform-item">
                              <h4>Ambispine Web Solution</h4>
                              <p>Coming Soon</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </h3>
                    <h3>
                      <Link to="/career" onClick={toggleMobileMenu}>
                        Career
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <ul>
            <li>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link">
                  Who We Are <FaChevronDown />
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="about-section">
                      <h3 style={{ color: "#333" }}>Who We are</h3>
                      <hr />
                      <h2>About Us</h2>
                      <p>
                        As we step into a new era of innovation, solution is at
                        the forefront of exploring the intersection of human
                        ingenuity and technological advancements. Our mission is
                        to empower individuals and organizations to harness the
                        power of technology to shape a brighter future.
                      </p>
                      <Link to="/aboutus" className="explore-btn">
                        Explore Now <FaArrowRight />
                      </Link>
                    </div>
                    {/* <div className="services-section">
                      <h3>View Services</h3>
                      <hr />
                      <ul>
                        <li>
                          <Link to="/platform">Platform</Link>
                          <h3 className="platform-dropdown-wrapper">
                            <Link
                              to="/platform"
                              className="platform-link"
                              onClick={toggleMobileMenu}
                            >
                              Platform
                              <div className="platform-dropdown">
                                <div className="platform-content">
                                  <div className="platform-item">
                                    <h4>Spread</h4>
                                    <p>Coming Soon</p>
                                  </div>
                                  <div className="platform-item">
                                    <h4>Ambispine Web Solution</h4>
                                    <p>Coming Soon</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <Link to="/career">Career</Link>
                        </li>
                      </ul>
                    </div> */}
                    <div className="services-section">
                      <h3 style={{ color: "#605d5d" }}>View Services</h3>
                      <hr />
                      <ul>
                        <li
                          className="platform-dropdown-wrapper"
                          onMouseEnter={() => setIsPlatformHovered(true)}
                          onMouseLeave={() => setIsPlatformHovered(false)}
                        >
                          <Link to="/platform" onClick={toggleMobileMenu}>
                            Platform <FaChevronDown size={13} />
                          </Link>
                          {isPlatformHovered && (
                            <div className="platform-dropdown">
                              <div className="platform-content">
                                <div className="platform-item">
                                  <h4>
                                    <Link to="/platform">Spread</Link>
                                  </h4>
                                  <p>Coming Soon</p>
                                </div>
                                <hr />
                                <div className="platform-item">
                                  <h4>
                                    <Link to="/platform">
                                      Ambispine Web Solution
                                    </Link>
                                  </h4>
                                  <p>Coming Soon</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                        <li>
                          <Link to="/career" onClick={toggleMobileMenu}>
                            Career
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* ======================== */}

          <NavLink to="/product" onClick={toggleMobileMenu}>
            Products
          </NavLink>
          <NavLink to="/career" onClick={toggleMobileMenu}>
            Career
          </NavLink>
          <NavLink to="/contact" onClick={toggleMobileMenu}>
            Contact
          </NavLink>
        </div>

        <div className="header__actions">
          <button onClick={toggleSearch} className="header__action-btn">
            <IoIosSearch className="header__action-icon" />
          </button>
          {/* <button className="header__action-btn">
            <IoGlobeOutline className="header__action-icon" />
          </button> */}
          {/* <div className="header__language-dropdown">
            <button onClick={toggleLanguageMenu} className="header__action-btn">
              <IoGlobeOutline className="header__action-icon" />
              <span className="header__current-language">
                {currentLanguage === "en" ? "EN" : "हि"}
              </span>
            </button>
            {isLanguageMenuOpen && (
              <div className="header__language-menu">
                <button
                  onClick={() => changeLanguage("en")}
                  className="header__language-option"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="header__language-option"
                >
                  हिन्दी (Hindi)
                </button>
              </div>
            )}
          </div> */}
          <div className="header__language-dropdown">
            <button className="header__action-btn">
              <IoGlobeOutline className="header__action-icon" />
              <span className="header__current-language">
                {currentLanguage.toUpperCase()}
              </span>
            </button>
            <div className="header__language-menu">
              <button
                onClick={() => changeLanguage("en")}
                className="header__language-option"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className="header__language-option"
              >
                HI
              </button>
            </div>
          </div>
          {/* <Link to="/signin" className="header__signin-btn">
            Sign In
          </Link> */}
          {/* <Link to="/signin" className="header__signin-btn">
            {currentLanguage === "en" ? "Sign In" : "साइन इन"}
          </Link> */}
          <button
            onClick={toggleMobileMenu}
            className="header__mobile-menu-btn"
          >
            <FaBars className="header__mobile-menu-icon" />
          </button>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="header__search">
          <form className="header__search-form">
            <input
              type="text"
              placeholder="Search..."
              className="header__search-input"
            />
            <button type="submit" className="header__search-submit">
              <IoIosSearch className="header__search-icon" />
            </button>
          </form>
        </div>
      )}

      {!isHomeOrContact && (
        <div className="header__subnav">
          <div className="header__subnav-content">
            <NavLink to="/overview" className="header__subnav-link">
              Overview
            </NavLink>
            <NavLink to="/platform" className="header__subnav-link">
              Platform
            </NavLink>
            <NavLink to="/career" className="header__subnav-link">
              Career
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`header__nav-link ${
        isActive ? "header__nav-link--active" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
