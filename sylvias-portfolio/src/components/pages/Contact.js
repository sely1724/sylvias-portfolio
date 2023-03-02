import React, { useState } from "react";
import "../../App.css";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // handle any change in form inputs.
  function handleInputChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    setFormState("");
    // TUTOR SESH: how do I empty out boxes?
  }
  // start jsx to be displayed
  return (
    // must place outside of header box
    <div className="formContainer">
      <form className="formBox" onSubmit={handleFormSubmit}>
        <p>Hello {name}</p>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            defaultValue={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <br />
          <input
            defaultValue={email}
            name="email"
            onBlur={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            rows="5"
            defaultValue={message}
            name="message"
            onBlur={handleInputChange}
            type="message"
            placeholder="message"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="errorText">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
