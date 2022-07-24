import React from "react";
import styled from "styled-components";

//Variables
const primaryTheme = {
  bgColor: "#7514CC",
  borderColor: "#7514CC",
  color: "#ffffff",
  width: "100%",
};
const secondaryTheme = {
  bgColor: "transparent",
  borderColor: "#7514CC",
  color: "#7514CC",
};

const Btn = styled.a`
  display: inline-flex;
  border-radius: 4px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  padding: 8px 36px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(90%);
  }

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 10px 48px;
    font-weight: 500;
  }
`;

//PrimaryButton
const PrimaryButton = ({ children, href, width = "100%", height = "100%" }) => {
  return (
    <Btn width={width} height={height} theme={primaryTheme} href={href}>
      {children}
    </Btn>
  );
};

//SecondaryButton
const SecondaryButton = ({ children, href }) => {
  return (
    <Btn theme={secondaryTheme} href={href}>
      {children}
    </Btn>
  );
};

export { PrimaryButton, SecondaryButton };
