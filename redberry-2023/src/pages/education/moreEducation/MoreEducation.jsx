import React from "react";

import Selects from "../../../components/UI/select/Select";


import classes from './MoreEducation.module.css';
const MoreEducation = (props) => {

  return (
    <>
      <div className={props.instituteInputClasses}>
        <label htmlFor="institute">სასწავლებელი</label>
        <input
          className={props.instituteIsValid ? "success" : null}
          type="text"
          name="institute"
          value={props.enteredInstitute}
          onChange={props.instituteChangedHandler}
          onBlur={props.instituteBlurHandler}
          placeholder="სასწავლებელი"
        />
        <p>მინიმუმ ორი სიმბოლო</p>
      </div>
      <div className="display-container">
        <Selects />
        <div className="input-div">
          <label htmlFor="lastDate">დამთავრების რიცხვი</label>
          <input
            className={
              props.lastDateEducationValue !== ""
                ? "success-border"
                : props.lastDateEducationTouched &&
                  props.lastDateEducationValue === ""
                ? "danger-border"
                : null
            }
            type="date"
            name="lastDate"
            onChange={(e) => props.setLastDateEducationValue(e.target.value)}
            value={props.lastDateEducationValue}
          />
        </div>
      </div>
      <div className={classes.description} id="border"> 
        <label htmlFor="educationTextarea">აღწერა</label>
        <textarea
          className={
            props.educationDescriptionValue !== ""
              ? "success-border"
              : props.educationDescriptionValue === "" &&
                props.educationDescriptionTouched
              ? "danger-border"
              : null
          }
          name="educationTextarea"
          value={props.educationDescriptionValue}
          onChange={(e) => props.setEducationDescriptionValue(e.target.value)}
          placeholder="განათლების აღწერა"></textarea>
      </div>
    </>
  );
};

export default MoreEducation;
