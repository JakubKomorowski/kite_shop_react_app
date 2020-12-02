import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";

const contactFormSchema = Yup.object().shape({
  email: Yup.string().email("Wrong email").required("enter email"),
  message: Yup.string().required("enter message"),
  name: Yup.string().required("enter name"),
});

const StyledField = styled(Field)`
  width: 500px;
  display: block;
`;

const StyledErrorWrapper = styled.div`
  color: red;
`;

// emailjs
const ContactForm = () => {
  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert("email sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          message: "",
          name: "",
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values) => {
          console.log(values);

          values.email = "";
          values.message = "";
          values.name = "";
        }}
      >
        {({ values }) => (
          <Form onSubmit={handleEmailSend}>
            <Field
              name="name"
              type="text"
              placeholder="type your name.."
              value={values.name}
              required
            />
            <ErrorMessage name="name" />
            <StyledField
              name="email"
              type="email"
              placeholder="type email here.."
              value={values.email}
              required
            />
            <StyledErrorWrapper>
              <ErrorMessage name="email" />
            </StyledErrorWrapper>

            <Field
              name="message"
              type="text"
              placeholder="type message here.."
              value={values.message}
              component="textarea"
              required
            />
            <ErrorMessage name="message" />
            <button type="submit">send</button>
          </Form>
        )}
      </Formik>

      <GoogleMap />
    </>
  );
};

export default ContactForm;
