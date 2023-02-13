import React from "react";

const MoreExperience = ({
  handleChange,
  experience,
  index,
  firstDateTouched,
  lastDateTouched,
  descriptionTouched,
  positionTouched,
  employerTouched
}) => {
  return (
    <>
      <div className='input-div'>
        <label htmlFor="position">თანამდებობა</label>
        <input
          // className={
          //   experience[index].position !== ""
          //     ? "success"
          //     : positionTouched && experience[index].position === ""
          //     ? "danger"
          //     : null
          // }
          type="text"
          name="position"
          placeholder="დეველოპერი, დიზაინერი და ა.შ"
          value={experience !== null ? experience[index]?.position : ""}
          onChange={(e) => handleChange(e, index)}
        />
        <p>მინიმუმ ორი სიმბოლო</p>
      </div>
      <div className='input-div'>
        <label htmlFor="employer">დამსაქმებელი</label>
        <input
          // className={
          //   experience[index].employer !== ""
          //     ? "success"
          //     : employerTouched && experience[index].employer === ""
          //     ? "invalid"
          //     : null
          // }
          type="text"
          name="employer"
          placeholder="დამსაქმებელი"
          value={experience !== null ? experience[index]?.employer : ""}
          onChange={(e) => handleChange(e, index)}
        />
        <p>მინიმუმ ორი სიმბოლო</p>
      </div>
      <div className="display-container">
        <div className="input-div">
          <label htmlFor="start_date">დაწყების რიცხვო</label>
          <input
            // className={
            //   experience[index].start_date !== ""
            //     ? "success-border"
            //     : firstDateTouched && experience[index].start_date === ""
            //     ? "danger-border"
            //     : null
            // }
            type="date"
            name="start_date"
            value={experience !== null ? experience[index]?.start_date : ""}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="due_date">დამთავრების რიცხვი</label>
          <input
            // className={
            //   experience[index].due_date !== ""
            //     ? "success-border"
            //     : lastDateTouched && experience[index].due_date === ""
            //     ? "danger-border"
            //     : null
            // }
            type="date"
            name="due_date"
            value={experience !== null ? experience[index]?.due_date : ""}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      </div>
      {/* textarea */}
      <div className="textarea" id="border">
        <label htmlFor="description">აღწერა</label>
        <textarea
          // className={
          //   experience[index].description !== ""
          //     ? "success-border"
          //     : descriptionTouched && experience[index].description === ""
          //     ? "danger-border"
          //     : null
          // }
          name="description"
          value={experience !== null ? experience[index]?.description : ""}
          onChange={(e) => handleChange(e, index)}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
      </div>
    </>
  );
};

export default MoreExperience;
