import React, { useContext } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import GoogleMap from "./GoogleMap";
import ShopContext from "../context";
import { alertColorOptions } from "../utils/alertColorOptions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {
  StyledField,
  StyledFieldWrapper,
  StyledMessage,
  StyledWrapper,
  StyledFormik,
  StyledTitle,
  StyledErrorWrapper,
  StyledGoogleMapWrapper,
  StyledButton,
} from "./styledComponents/StyledContactForm";

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("ENTER CORRECT EMAIL")
    .required("PLEASE COMPLETE THIS REQUIRED FIELD"),
  message: Yup.string().required("PLEASE COMPLETE THIS REQUIRED FIELD"),
  name: Yup.string().required("PLEASE COMPLETE THIS REQUIRED FIELD"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

// emailjs
const ContactForm = () => {
  const value = useContext(ShopContext);

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
            value.showAndCloseAlertAfterTimeWithContentAndType(
              3500,
              "Message sent!",
              alertColorOptions.messageSent
            );
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const classes = useStyles();
  return (
    <StyledWrapper>
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
          <StyledFormik onSubmit={handleEmailSend}>
            <StyledTitle>Contact Us</StyledTitle>
            <StyledFieldWrapper>
              <label htmlFor="name">Name</label>
              <StyledField
                name="name"
                type="text"
                value={values.name}
                required
              />
            </StyledFieldWrapper>
            <ErrorMessage name="name" />
            <StyledFieldWrapper>
              <label htmlFor="email">Email</label>
              <StyledField
                name="email"
                type="email"
                value={values.email}
                required
              />
            </StyledFieldWrapper>
            <StyledErrorWrapper>
              <ErrorMessage name="email" />
            </StyledErrorWrapper>
            <StyledFieldWrapper>
              <label htmlFor="message">Message</label>
              <StyledMessage
                name="message"
                type="text"
                value={values.message}
                component="textarea"
                required
              />
            </StyledFieldWrapper>
            <ErrorMessage name="message" />

            <StyledButton className={classes.root}>
              <Button
                endIcon={<Icon>send</Icon>}
                type="submit"
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </StyledButton>
          </StyledFormik>
        )}
      </Formik>
      <StyledGoogleMapWrapper>
        <GoogleMap />
      </StyledGoogleMapWrapper>
    </StyledWrapper>
  );
};

export default ContactForm;
