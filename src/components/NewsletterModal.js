import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../context";
import styled from "styled-components";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { alertColorOptions } from "../utils/alertColorOptions";
import { Form, Field } from "formik";
import {
  StyledFieldWrapper,
  StyledErrorWrapper,
} from "./styledComponents/StyledContactForm";

const StyledField = styled(Field)`
  width: 100%;
  display: block;
  border: none;
  background-color: white;
  border: 1px solid lightgray;
  padding: 0.5em;
  margin: 2px 0;
  font-family: "Poppins";
  font-size: 1rem;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryBlue};
  }
`;

const StyledFormik = styled(Form)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
`;

const SubscribeBtn = styled.button`
  background: ${({ theme }) => theme.primaryBlue};
  padding: 0.5em 1.75em;
  width: 100%;
  color: white;
  border: none;
  text-transform: uppercase;
  font-size: 1.25em;
  outline: none;
  margin-top: 10px;
  &:hover {
    background-color: #007a9b;
  }
`;

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("ENTER CORRECT EMAIL")
    .required("PLEASE COMPLETE THIS REQUIRED FIELD"),
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewsletterModal = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { handleNewsletterClose, openNewsletter } = value;

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
              "Subscribed",
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
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openNewsletter}
        onClose={handleNewsletterClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openNewsletter}>
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
                <h2 id="transition-modal-title">Subscribe to our Newsletter</h2>
                <StyledFieldWrapper>
                  <label htmlFor="email">Email</label>
                  <StyledField
                    name="email"
                    placeholder="email@email.com"
                    type="email"
                    value={values.email}
                    required
                  />
                </StyledFieldWrapper>
                <StyledErrorWrapper>
                  <ErrorMessage name="email" />
                </StyledErrorWrapper>
                <SubscribeBtn onClick={handleNewsletterClose} type="submit">
                  Subscribe
                </SubscribeBtn>
              </StyledFormik>
            )}
          </Formik>
        </Fade>
      </Modal>
    </div>
  );
};

export default NewsletterModal;
