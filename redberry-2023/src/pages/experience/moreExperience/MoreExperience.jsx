import React, { useEffect, useState } from "react";
import useInput from "../../../hooks/useInput";

const patterns = {
  profession: /^.{2,}$/,
  employer: /^.{2,}$/,
};

const MoreExperience = (props) => {
  // position
  const {
    value: enteredPosition,
    valueChangeHandler: positionChangedHandler,
    inputBlurHandler: positionBlurHandler,
    isValid: positionIsValid, // is form valid?
    inputClasses: positionInputClasses,
    onsubmit: enteredPositionSubmited,
  } = useInput((value) => patterns.profession.test(value), "profession");

  // employer
  const {
    value: enteredEmployer,
    valueChangeHandler: employerChangedHandler,
    inputBlurHandler: employerBlurHandler,
    isValid: employerIsValid, // is form valid?
    inputClasses: employerInputClasses,
    onsubmit: enteredEmployerSubmited,
  } = useInput((value) => patterns.employer.test(value), "employer");

  return <>
    
  </>;
};

export default MoreExperience;
