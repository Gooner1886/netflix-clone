import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../Logo/NetflixLogo.svg";
import Avatar from "../Logo/NetflixAvatar.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`${classes.Navbar} ${show ? classes.NavbarScroll : ''}`}>
      <img className={classes.logo} src={Logo} alt="Netflix Logo" />
      <img className={classes.avatar} src={Avatar} alt="Netflix Avatar" />
    </div>
  );
};

export default Navbar;
