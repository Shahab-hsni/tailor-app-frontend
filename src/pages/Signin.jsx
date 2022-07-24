import React from "react";

import Form from "../components/ui/Form/Form";
import { Grid2 } from "../components/ui/Containers/styles";
import styled from "styled-components";
import logoImg from "../logo_black.svg";
import { v } from "../styles/variables";
const FullBg = styled.div`
  background-image: url("../../src/login-img.png");
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: max-content;
  align-items: flex-start;
  margin: auto;
  padding: ${v.xxlSpacing} ${v.mdSpacing} 0 ${v.mdSpacing};
  box-sizing: border-box;
  gap: 15vh;
`;
const SignIn = () => {
  const onSubmitHandler = (form, callback) => {
    console.log("Sign In submitted: ", form);
    callback();
  };

  return (
    <Grid2>
      <Wrapper>
        <img src={logoImg} alt="" />
        <Form
          title={"Sign In"}
          formArr={formArr}
          submitBtn={"Sign In"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "Don't have an account?",
            link: {
              label: "Register",
              to: "/register",
            },
          }}
        />
      </Wrapper>

      <FullBg></FullBg>
    </Grid2>
  );
};

const formArr = [
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];

export default SignIn;
