import React from "react";

//import css module
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return <main className={classes["main-container"]}>{children}</main>;
};

export default Layout;
