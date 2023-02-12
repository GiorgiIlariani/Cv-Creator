import React, { useState } from "react";
import Resume from "../cv/Index";
// module css
import classes from "./styles.module.css";
// layout
import Layout from "../../components/layout/Layout";
// header, btn
import Header from "../../components/header/Header";
import NextBtn from "../../components/UI/nextBtn/NextBtn";

//router link
import { Link } from "react-router-dom";
// useInput hook
import useInput from "../../hooks/useInput";

const patterns = {
  name: /^[ა-ჰ]{2,}$/,
  surname: /^[ა-ჰ]{2,}$/,
  mail: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
  phoneNumber: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
};

const PersonalInfo = () => {
  // textarea
  const [textareaValue, setTextareaValue] = useState(
    localStorage.getItem("textareaValue") || ""
  );

  // // image
  const [image, setImage] = useState(localStorage.getItem("image"));
  const [imageTouched, setIsImageTouched] = useState(false);

  // name
  const {
    value: enteredName,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: nameIsValid, // is form valid?
    inputClasses: nameInputClasses,
    onSubmit: enteredNameSubmited,
  } = useInput((value) => patterns.name.test(value), "name");

  // surname
  const {
    value: enteredSurname,
    valueChangeHandler: surnameChangedHandler,
    inputBlurHandler: surnameBlurHandler,
    isValid: surnameIsValid, // is form valid?
    inputClasses: surnameInputClasses,
    onSubmit: enteredSurnameSubmited,
  } = useInput((value) => patterns.surname.test(value), "surname");

  // mail
  const {
    value: enteredMail,
    valueChangeHandler: mailChangedHandler,
    inputBlurHandler: mailBlurHandler,
    isValid: mailIsValid, // is form valid?
    inputClasses: mailInputClasses,
    onSubmit: enteredMailSubmited,
  } = useInput((value) => patterns.mail.test(value), "mail");

  // phone  number
  const {
    value: enteredPhoneNumber,
    valueChangeHandler: phoneNumberChangedHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    isValid: phoneNumberIsValid, // is form valid?
    inputClasses: phoneNumberInputClasses,
    onSubmit: enteredPhoneNumberSubmited,
  } = useInput((value) => patterns.phoneNumber.test(value), "phoneNumber");

  localStorage.setItem("name", enteredName);
  localStorage.setItem("surname", enteredSurname);
  localStorage.setItem("mail", enteredMail);
  localStorage.setItem("phoneNumber", enteredPhoneNumber);
  localStorage.setItem("textareaValue", textareaValue);
  localStorage.setItem("image", image);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsImageTouched(true);
    enteredNameSubmited(true);
    enteredSurnameSubmited(true);
    enteredMailSubmited(true);
    enteredPhoneNumberSubmited(true);
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  let formIsValid = false;

  if (
    nameIsValid &&
    surnameIsValid &&
    mailIsValid &&
    phoneNumberIsValid &&
    image
  ) {
    formIsValid = true;
  }

  return (
    <Layout>
      <div className="left-side">
        <Header page="1/3" title="პირადი ინფო" />
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="display-container">
            <div className={nameInputClasses}>
              <label htmlFor="name">სახელი</label>
              <input
                className={nameIsValid ? "success" : null}
                type="text"
                name="name"
                placeholder="ანზორ"
                value={enteredName}
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                autoComplete="new-name"
              />
              <p>მინიმუმ ორი ასო, ქართული ასოები</p>
            </div>
            <div className={surnameInputClasses}>
              <label htmlFor="surname">გვარი</label>
              <input
                className={surnameIsValid ? "success" : null}
                type="text"
                name="surname"
                placeholder="მუმლაძე"
                value={enteredSurname}
                onChange={surnameChangedHandler}
                onBlur={surnameBlurHandler}
                autoComplete="new-surname"
              />
              <p>მინიმუმ ორი ასო, ქართული ასოები</p>
            </div>
          </div>
          {/* upload image */}
          <div className={classes["upload-photo"]}>
            <span
              className={imageTouched && image === null ? "error-text" : null}>
              პირადი ფოტოს ატვირთვა
            </span>
            <label htmlFor="upload-img">
              ატვირთვა
              <input
                type="file"
                id="upload-img"
                name="upload-img"
                onChange={onImageChange}
              />
            </label>
          </div>
          {/* textarea */}
          <div className="textarea">
            <label htmlFor="aboutMe">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              name="aboutMe"
              placeholder="ზოგადი ინფო შენს შესახებ"
              onChange={(e) => setTextareaValue(e.target.value)}
              value={textareaValue}></textarea>
          </div>
          {/* mail */}
          <div className={mailInputClasses}>
            <label htmlFor="mail">ელ.ფოსტა</label>
            <input
              className={mailIsValid ? "success" : null}
              type="text"
              name="mail"
              placeholder="giorgi@redberry.ge"
              value={enteredMail}
              onChange={mailChangedHandler}
              onBlur={mailBlurHandler}
              autoComplete="new-mail"
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </div>
          {/* phoneNumber */}
          <div className={phoneNumberInputClasses}>
            <label htmlFor="phoneNumber">მობილურის ნომერი</label>
            <input
              className={phoneNumberIsValid ? "success" : null}
              type="text"
              name="phoneNumber"
              placeholder="+995 598 91 14 52"
              value={enteredPhoneNumber}
              onChange={phoneNumberChangedHandler}
              onBlur={phoneNumberBlurHandler}
              autoComplete="new-phoneNumber"
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          </div>
          {formIsValid ? (
            <Link to="/experience">
              <NextBtn />
            </Link>
          ) : (
            <NextBtn />
          )}
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

export default PersonalInfo;
