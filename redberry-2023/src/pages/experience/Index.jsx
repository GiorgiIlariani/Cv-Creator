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

const patterns = {
  profession: /^.{2,}$/,
  employer: /^.{2,}$/,
};

const Experience = () => {
  // position
  const {
    value: enteredPosition,
    valueChangeHandler: positionChangedHandler,
    inputBlurHandler: positionBlurHandler,
    isValid: positionIsValid, // is form valid?
    inputClasses: positionInputClasses,
    onSubmit: enteredPositionSubmited,
  } = useInput((value) => patterns.profession.test(value), "profession");

  // employer
  const {
    value: enteredEmployer,
    valueChangeHandler: employerChangedHandler,
    inputBlurHandler: employerBlurHandler,
    isValid: employerIsValid, // is form valid?
    inputClasses: employerInputClasses,
    onSubmit: enteredEmployerSubmited,
  } = useInput((value) => patterns.employer.test(value), "employer");

  // first date value
  const [firstDateValue, setFirstDateValue] = useState(
    localStorage.getItem("firstDateValue") || ""
  );
  const [firstDateTouched, setFirstDateTouched] = useState(false);

  // last date value
  const [lastDateValue, setLastDateValue] = useState(
    localStorage.getItem("lastDateValue") || ""
  );
  const [lastDateTouched, setLastDateTouched] = useState(false);

  // description value
  const [descriptionValue, setDescriptionValue] = useState(
    localStorage.getItem("descriptionValue") || ""
  );
  const [descriptionTouched, setDescriptionTouched] = useState(false);

  // local storage
  const enteredName = localStorage.getItem("name");
  const enteredSurname = localStorage.getItem("surname");
  const enteredMail = localStorage.getItem("mail");
  const enteredPhoneNumber = localStorage.getItem("phoneNumber");
  const textareaValue = localStorage.getItem("textareaValue");
  const image = localStorage.getItem("image");

  useEffect(() => {
    localStorage.setItem("profession", enteredPosition);
    localStorage.setItem("employer", enteredEmployer);
    localStorage.setItem("firstDateValue", firstDateValue);
    localStorage.setItem("lastDateValue", lastDateValue);
    localStorage.setItem("descriptionValue", descriptionValue);
  }, [
    enteredPosition,
    enteredEmployer,
    firstDateValue,
    lastDateValue,
    descriptionValue,
  ]);

  let formIsValid = false;

  if (
    positionIsValid &&
    employerIsValid &&
    firstDateValue &&
    lastDateValue &&
    descriptionValue
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    enteredPositionSubmited(true);
    enteredEmployerSubmited(true);
    setFirstDateTouched(true);
    setLastDateTouched(true);
    setDescriptionTouched(true);
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="2/3" title="გამოცდილება" />
        <form className="form-container" onSubmit={submitHandler}>
          <MoreExperience
            enteredPosition={enteredPosition}
            positionChangedHandler={positionChangedHandler}
            positionBlurHandler={positionBlurHandler}
            positionIsValid={positionIsValid}
            positionInputClasses={positionInputClasses}
            enteredEmployer={enteredEmployer}
            employerChangedHandler={employerChangedHandler}
            employerBlurHandler={employerBlurHandler}
            employerIsValid={employerIsValid}
            employerInputClasses={employerInputClasses}
            firstDateValue={firstDateValue}
            setFirstDateValue={setFirstDateValue}
            firstDateTouched={firstDateTouched}
            setFirstDateTouched={setFirstDateTouched}
            lastDateValue={lastDateValue}
            setLastDateValue={setLastDateValue}
            lastDateTouched={lastDateTouched}
            setLastDateTouched={setLastDateTouched}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}
            descriptionTouched={descriptionTouched}
            setDescriptionTouched={setDescriptionTouched}
          />
          <button type="button" className="btn-more">
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
        position={enteredPosition}
        employer={enteredEmployer}
        start_date={firstDateValue}
        due_date={lastDateValue}
        description={descriptionValue}
      />
    </Layout>
  );
};

export default Experience;

// const [experienceData, setExperienceData] = useState([
//   {
//     position: "",
//     employer: "",
//     start_date: "",
//     due_date: "",
//     description: "",
//   },
// ]);

// const handleAddExperienes = () => {
//   setExperienceData([
//     ...experienceData,
//     {
//       position: "",
//       employer: "",
//       start_date: "",
//       due_date: "",
//       description: "",
//       id: Math.random(),
//     },
//   ]);
// };

// localstorage setItems
// useEffect(() => {
//   localStorage.setItem("experienceData", JSON.stringify(experienceData));
// }, [experienceData]);

// const [formIsValid, setFormIsValid] = useState(false);

// const handleSubmit = (e) => {
//   e.preventDefault();

//   setFirstDateTouched(true);
//   setLastDateTouched(true);
//   setDescriptionTouched(true);
// };

// firstDateValue = { firstDateValue };
// lastDateValue = { lastDateValue };
// descriptionValue = { descriptionValue };
// firstDateTouched = { firstDateTouched };
// lastDateTouched = { lastDateTouched };
// descriptionTouched = { descriptionTouched };
// setFirstDateValue = { setFirstDateValue };
// setLastDateValue = { setLastDateValue };
// setDescriptionValue = { setDescriptionValue };

// const formValidation = (isFormValid) => {
//   setFormIsValid(isFormValid);
// };
