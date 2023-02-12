import React, { useState } from "react";
import Resume from "../cv/Index";
// module css
import classes from "./styles.module.css";
// layout
import Layout from "../../components/layout/Layout";
// header, btns, textare
import Header from "../../components/header/Header";


import NextBtn from "../../components/UI/nextBtn/NextBtn";
import PrevBtn from "../../components/UI/prevBtn/PrevBtn";
import { Link } from "react-router-dom";

const Education = () => {
  // local storage
  const enteredName = localStorage.getItem("name");
  const enteredSurname = localStorage.getItem("surname");
  const enteredMail = localStorage.getItem("mail");
  const enteredPhoneNumber = localStorage.getItem("phoneNumber");
  const textareaValue = localStorage.getItem("textareaValue");
  const image = localStorage.getItem("image");

  return (
    <Layout>
      <div className="left-side">
        <Header page="3/3" title="განათლება" />
      </div>
      <Resume
        name={enteredName}
        surname={enteredSurname}
        mail={enteredMail}
        phoneNumber={enteredPhoneNumber}
        textarea={textareaValue}
        image={image}
      />
    </Layout>
  );
};

export default Education;
