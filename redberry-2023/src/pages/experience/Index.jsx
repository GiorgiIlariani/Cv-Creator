import React, { useState } from "react";
import Resume from "../cv/Index";
// module css
import classes from "./styles.module.css";
// layout
import Layout from "../../components/layout/Layout";
// header, btns, textare
import Header from "../../components/header/Header";

//more experience
import MoreExperience from "./moreExperience/MoreExperience";

// buttons
import NextBtn from "../../components/UI/nextBtn/NextBtn";
import PrevBtn from "../../components/UI/prevBtn/PrevBtn";

//router link
import { Link } from "react-router-dom";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ]);

  // local storage
  const enteredName = localStorage.getItem("name");
  const enteredSurname = localStorage.getItem("surname");
  const enteredMail = localStorage.getItem("mail");
  const enteredPhoneNumber = localStorage.getItem("phoneNumber");
  const textareaValue = localStorage.getItem("textareaValue");
  const image = localStorage.getItem("image");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="2/3" title="გამოცდილება" />
        <form className="form-container" onSubmit={handleSubmit}>
          <MoreExperience />
          <button className="btn-more">მეტი გამოცდილების დამატება</button>
          <div className={classes.btns}>
            <Link to="/personalInfo">
              <PrevBtn />
            </Link>
            <Link to="/education">
              <NextBtn />
            </Link>
          </div>
        </form>
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

export default Experience;
