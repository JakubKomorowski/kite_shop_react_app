import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledDrawerWrapper = styled.div`
  position: absolute;

  width: 300px;
  transition: all 0.4s ease-in-out;
  transform: ${(props) => (props.open ? "translateX(300px)" : "0px")};
  height: 90vh;
  background-color: white;
  left: -300px;
  top: 68px;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledToggleButton = styled.button`
  position: absolute;
  top: 30px;
  left: 330px;
`;

export const FilterMenuWrapper = styled.div`
  margin-top: 40px;
  margin-left: 18px;
`;
