import React from "react";

// router link
import { Link } from "react-router-dom";

// module css
import classes from "./Header.module.css";

// react icons
import { FaAngleLeft } from "react-icons/fa";

const Header = ({ title, page }) => {
  return (
    <>
      <Link
        to="/"
        className={classes["icon-btn"]}
        onClick={() => localStorage.clear()}>
        <FaAngleLeft />
      </Link>
      <header className={classes.header}>
        <h2>{title}</h2>
        <span>{page}</span>
      </header>
    </>
  );
};

export default Header;
