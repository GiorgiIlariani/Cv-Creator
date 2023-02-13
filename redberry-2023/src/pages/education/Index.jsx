import React, { useEffect, useState } from "react";
import Resume from "../cv/Index";
// module css
import classes from "./styles.module.css";
// layout
import Layout from "../../components/layout/Layout";
// header, btns, textare
import Header from "../../components/header/Header";

import MoreEducation from "./moreEducation/MoreEducation";

import useInput from "../../hooks/useInput";

import NextBtn from "../../components/UI/nextBtn/NextBtn";
import PrevBtn from "../../components/UI/prevBtn/PrevBtn";
import { Link } from "react-router-dom";

const patterns = {
  institute: /^.{2,}$/,
};

const Education = () => {
  const {
    value: enteredInstitute,
    valueChangeHandler: instituteChangedHandler,
    inputBlurHandler: instituteBlurHandler,
    isValid: instituteIsValid, // is form valid?
    inputClasses: instituteInputClasses,
    onSubmit: instituteSubmited,
  } = useInput((value) => patterns.institute.test(value), "institute");

  // last date value
  const [lastDateEducationValue, setLastDateEducationValue] = useState(
    localStorage.getItem("lastDateEducationValue") || ""
  );
  const [lastDateEducationTouched, setLastDateEducationTouched] =
    useState(false);

  // description
  const [educationDescriptionValue, setEducationDescriptionValue] = useState(
    localStorage.getItem("educationDescriptionValue") || ""
  );

  const [educationDescriptionTouched, setEducationDescriptionTouched] =
    useState(false);

  // local storage
  const enteredName = localStorage.getItem("name");
  const enteredSurname = localStorage.getItem("surname");
  const enteredMail = localStorage.getItem("mail");
  const enteredPhoneNumber = localStorage.getItem("phoneNumber");
  const textareaValue = localStorage.getItem("textareaValue");
  const image = localStorage.getItem("image");
  const position = localStorage.getItem("position");
  const employer = localStorage.getItem("employer");
  const start_date = localStorage.getItem("firstDateValue");
  const due_date = localStorage.getItem("lastDateValue");
  const description = localStorage.getItem("descriptionValue");

  useEffect(() => {
    localStorage.setItem("institute", enteredInstitute);
    localStorage.setItem(
      "educationDescriptionValue",
      educationDescriptionValue
    );
    localStorage.setItem("lastDateEducationValue", lastDateEducationValue);
  }, [enteredInstitute, educationDescriptionValue, lastDateEducationValue]);

  let formIsValid = false;

  if (lastDateEducationValue && educationDescriptionValue && enteredInstitute) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    instituteSubmited(true);
    setLastDateEducationTouched(true);
    setEducationDescriptionTouched(true);
  };


  return (
    <Layout>
      <div className="left-side">
        <Header page="3/3" title="განათლება" />
        <form className="form-container" onSubmit={handleSubmit}>
          <MoreEducation
            enteredInstitute={enteredInstitute}
            instituteChangedHandler={instituteChangedHandler}
            instituteIsValid={instituteIsValid}
            instituteInputClasses={instituteInputClasses}
            instituteSubmited={instituteSubmited}
            instituteBlurHandler={instituteBlurHandler}
            lastDateEducationValue={lastDateEducationValue}
            setLastDateEducationValue={setLastDateEducationValue}
            lastDateEducationTouched={lastDateEducationTouched}
            educationDescriptionValue={educationDescriptionValue}
            setEducationDescriptionValue={setEducationDescriptionValue}
            educationDescriptionTouched={educationDescriptionTouched}
          />
          <button type="button" className="btn-more">
            მეტი განათლების დამატება
          </button>
          <div className={classes.btns}>
            <Link to="/experience">
              <PrevBtn />
            </Link>
            {formIsValid ? (
              <Link to="/finishedResume">
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
        position={position}
        employer={employer}
        start_date={start_date}
        due_date={due_date}
        description={description}
      />
    </Layout>
  );
};

export default Education;
