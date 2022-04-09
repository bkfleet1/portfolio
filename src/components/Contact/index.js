import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
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
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact-section">
      <div id="contactme" className="contact-box">
        <div>
          <div className="header1">contact me</div>
        </div>
        <div className="contact">
          <div className="cform">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form">
                <div className="formText">Name: </div>
                <div className="formInput">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                  />
                </div>
              </div>
              <div className="contact-form">
                <div className="formText">Email: </div>
                <div className="formInput">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  />
                </div>
              </div>
              <div className="contact-form">
                <div className="formText">Message: </div>
                <div className="formInput">
                  <label htmlFor="message"></label>
                  <textarea
                    name="message"
                    rows="5"
                    defaultValue={message}
                    onBlur={handleChange}
                  />
                </div>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div className="contact-form">
                <div className="formText"></div>
                <div>
                  <button
                    className="btns-primary"
                    data-testid="button"
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="map">
            <div>
              <iframe
                title="contact map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-95.2901767!3d30.5691036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <address>
                481 Risner Road <br />
                New Waverly, TX <br />
                77358 <br />
                Email:
                <a href="mailto: bradkelleytech@gmail.com" className="emails">
                  {" "}
                  bradkelleytech@gmail.com
                </a>
                <br />
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
