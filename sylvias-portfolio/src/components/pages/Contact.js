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

  const checkValid = (e) => {
    // Based on the input type, we set the state of either email, username, and password
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Email is not valid - please try again");
      } else {
        setErrorMessage("");
      }
    }
    // if error message blank, set new state to include the new email value.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  function checkLength(e) {
    if (
      e.target.name === "name" ||
      e.target.name === "message" ||
      e.target.name === "email"
    ) {
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

  return (
    // must place outside of header box
    <div className="formContainer">
      <p>Hello {name}</p>
      <form className="formBox">
        <input
          value={email}
          name="email"
          onBlur={checkLength}
          onChange={checkValid}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onBlur={checkLength}
          type="text"
          placeholder="your name"
        />
        <input
          value={message}
          name="message"
          onBlur={checkLength}
          type="message"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
