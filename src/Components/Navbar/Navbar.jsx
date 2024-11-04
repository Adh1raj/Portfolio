import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset="50" href="#about" onClick={() => setMenu("about")}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset="50" href="#services" onClick={() => setMenu("services")}>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset="50" href="#work" onClick={() => setMenu("work")}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset="50" href="#contact" onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
