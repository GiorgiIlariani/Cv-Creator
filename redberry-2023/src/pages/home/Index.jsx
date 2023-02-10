import React from "react";

// router
import { Link } from "react-router-dom";

// import module css file
import classes from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <header>
        <img src="./assets/images/redberryLogo.png" alt="redberry logo" />
      </header>
      <main>
        <Link to="/personalInfo">
          <button className={classes.btn}>რეზიუმეს დამატება</button>
        </Link>
        <img src="./assets/images/homePage.png" alt="background logo" />
      </main>
    </div>
  );
};

export default HomePage;
