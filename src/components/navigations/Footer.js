import React from "react";
import {
  FooterWrapper,
  FooterCopyright,
} from "../styledComponents/StyledFooter";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <FooterCopyright>
        &copy; {year} Created by Jakub Komorowski
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
