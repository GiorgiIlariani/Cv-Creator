import React, { useEffect, useState } from "react";

// module css
import classes from "./styles.module.css";

const Resume = ({
  name,
  surname,
  mail,
  phoneNumber,
  textarea,
  image,
  experience,
}) => {
  return (
    <div className={classes["right-side"]}>
      <div className={classes["personal-info"]}>
        <div>
          <h2>
            {name} {surname}
          </h2>
          {mail && (
            <p className={classes.mail}>
              <img src="./assets/images/forMail.png" alt="mail-icon" />
              <span>{mail}</span>
            </p>
          )}

          {phoneNumber && (
            <p>
              <img src="./assets/images/phone.png" alt="phone-icon" />
              <span>{phoneNumber}</span>
            </p>
          )}
          {textarea && <h4>ჩემ შესახებ</h4>}
          <p>{textarea}</p>
        </div>
        {image !== null ? (
          <img src={image} className={classes.photo} alt="person-img" />
        ) : null}
      </div>
      {experience !== undefined &&
        experience.map((data, i) => {
          return (
            <div className={classes.experience} key={i}>
              <h4>გამოცდილება</h4>
              <p className={classes.position}>
                {data.position} {data.employer}
              </p>
              <p className={classes.dates}>
                {data.start_date} {data.due_date}
              </p>
              <p className={classes.description}>{data.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Resume;
