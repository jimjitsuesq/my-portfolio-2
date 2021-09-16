import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

function Contact() {
  const SERVICE_ID = "service_nthlarg";
  const TEMPLATE_ID = "template_klkeqr8";
  const USER_ID = "user_WNJKX6QHrbeWsbC0Tpt8C";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <main>
      <div className="home-grid">
        <div className="main-header">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-container">
          <div className="contact-text-container">
            <h3>Email</h3>
            <p>
              <a href="mailto: jim@jimpeters.dev">Jim@JimPeters.dev</a>
            </p>
            <h3>Phone</h3>
            <p>
              <a href="tel:805-263-7140">(805) 263-7140</a>
            </p>
            <p></p>
          </div>
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="from_email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="from_name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="message"
              placeholder="Message…"
              required
            />
            <Button type="submit" color="green">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
