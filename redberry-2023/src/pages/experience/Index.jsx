import React, { useEffect, useState } from "react";
import Resume from "../cv/Index";
// module css
import classes from "./styles.module.css";
// layout
import Layout from "../../components/layout/Layout";
// header, btns, textare
import Header from "../../components/header/Header";

import useInput from "../../hooks/useInput";

//more experience
import MoreExperience from "./moreExperience/MoreExperience";
import NextBtn from "../../components/UI/nextBtn/NextBtn";
import PrevBtn from "../../components/UI/prevBtn/PrevBtn";
import { Link } from "react-router-dom";

const Experience = () => {
  const [positionTouched, setPositionTouched] = useState(false);

  const [employerTouched, setEmployerTouched] = useState(false);

  const [firstDateTouched, setFirstDateTouched] = useState(false);

  const [lastDateTouched, setLastDateTouched] = useState(false);

  const [descriptionTouched, setDescriptionTouched] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();

    setPositionTouched(true);
    setEmployerTouched(true);
    setFirstDateTouched(true);
    setLastDateTouched(true);
    setDescriptionTouched(true);
  };

  const onAddMoreExperience = () => {
    setExperienceData([
      ...experienceData,
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
  };
  

  const handleChange = (e, index) => {
    const name = e.target.name;
    const values = [...experienceData];
    values[index][name] = e.target.value;
    localStorage.setItem("experienceData", JSON.stringify(experienceData));
    setExperienceData(values);
  };

  const experience = JSON.parse(localStorage.getItem("experienceData"));

  let formIsValid = false;




  return (
    <Layout>
      <div className="left-side">
        <Header page="2/3" title="გამოცდილება" />
        <form className="form-container" onSubmit={submitHandler}>
          {experienceData.map((data, index) => {
            console.log(data)
            return (
              <MoreExperience
                key={index}
                index={index}
                data={data}
                handleChange={handleChange}
                experience={experience}
                firstDateTouched={firstDateTouched}
                lastDateTouched={lastDateTouched}
                descriptionTouched={descriptionTouched}
                positionTouched={positionTouched}
                employerTouched={employerTouched}
              />
            );
          })}
          <button
            type="button"
            className="btn-more"
            onClick={onAddMoreExperience}>
            მეტი გამოცდილების დამატება
          </button>
          <div className={classes.btns}>
            <Link to="/personalInfo">
              <PrevBtn />
            </Link>
            {formIsValid ? (
              <Link to="/education">
                <NextBtn />
              </Link>
            ) : (
              <NextBtn />
            )}
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
        experience={experience}
      />
    </Layout>
  );
};

export default Experience;







  // if (
  //   positionIsValid &&
  //   employerIsValid &&
  //   firstDateValue &&
  //   lastDateValue &&
  //   descriptionValue
  // ) {
  //   formIsValid = true;
  // }
