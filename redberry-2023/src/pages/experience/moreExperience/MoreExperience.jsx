import React from "react";

const MoreExperience = (props) => {
  return (
    <>
      <div className={props.positionInputClasses}>
        <label htmlFor="position">თანამდებობა</label>
        <input
          className={props.positionIsValid ? "success" : null}
          type="text"
          name="position"
          value={props.enteredPosition}
          onChange={props.positionChangedHandler}
          onBlur={props.positionBlurHandler}
          placeholder="დეველოპერი, დიზაინერი და ა.შ"
        />
        <p>მინიმუმ ორი სიმბოლო</p>
      </div>
      <div className={props.employerInputClasses}>
        <label htmlFor="employer">დამსაქმებელი</label>
        <input
          className={props.employerIsValid ? "success" : null}
          type="text"
          name="employer"
          value={props.enteredEmployer}
          onChange={props.employerChangedHandler}
          onBlur={props.employerBlurHandler}
          placeholder="დამსაქმებელი"
        />
        <p>მინიმუმ ორი სიმბოლო</p>
      </div>
      <div className="display-container">
        <div className="input-div">
          <label htmlFor="startDate">დაწყების რიცხვო</label>
          <input
            className={
              props.firstDateValue !== ""
                ? "success-border"
                : props.firstDateTouched && props.firstDateValue === ""
                ? "danger-border"
                : null
            }
            type="date"
            name="startDate"
            onChange={(e) => props.setFirstDateValue(e.target.value)}
            value={props.firstDateValue}
          />
        </div>
        <div className="input-div">
          <label htmlFor="dueDate">დამთავრების რიცხვი</label>
          <input
            className={
              props.lastDateValue !== ""
                ? "success-border"
                : props.lastDateTouched && props.lastDateValue === ""
                ? "danger-border"
                : null
            }
            type="date"
            name="dueDate"
            onChange={(e) => props.setLastDateValue(e.target.value)}
            value={props.lastDateValue}
          />
        </div>
      </div>
      {/* textarea */}
      <div className="textarea" id="border">
        <label htmlFor="description">აღწერა</label>
        <textarea
          className={
            props.descriptionValue !== ""
              ? "success-border"
              : props.descriptionTouched && props.descriptionValue === ""
              ? "danger-border"
              : null
          }
          name="description"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          onChange={(e) => props.setDescriptionValue(e.target.value)}
          value={props.descriptionValue}></textarea>
      </div>
    </>
  );
};

export default MoreExperience;
