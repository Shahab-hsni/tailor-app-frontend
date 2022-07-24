import React, { useState, useMemo } from "react";
import {
  SRedirectLink,
  SForm,
  SFormControl,
  SFormTitle,
  SInput,
  SLabel,
  SRedirect,
  SRedirectLabel,
} from "./styles";
import { PrimaryButton } from "../Buttons";
import { H1 } from "../../ui/Texts";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

  const hasRedirect = !!redirect;
  return (
    <SForm autoComplete={"off"}>
      <H1 color={({ theme }) => theme.primaryDark}>{title}</H1>
      {formArr.map(({ label, name, type }, index) => (
        <SFormControl key={index}>
          <SInput
            id={name}
            name={name}
            type={type}
            value={form[name]}
            placeholder="hello"
            onChange={(e) => onChangeHandler(e)}
          />
          <SLabel htmlFor={name}>{label}</SLabel>
        </SFormControl>
      ))}
      <PrimaryButton
        onClick={(e) => {
          e.preventDefault();
          onSumbitHandler();
        }}
        height="54px"
      >
        {submitBtn}
      </PrimaryButton>
      {hasRedirect && (
        <SRedirect>
          <SRedirectLabel>{redirect.label}&nbsp;</SRedirectLabel>
          <SRedirectLink to={redirect.link.to}>
            {redirect.link.label}
          </SRedirectLink>
        </SRedirect>
      )}
    </SForm>
  );
};

Form.defaultProps = {
  title: "Sign In",
  formArr: [
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
  ],
  submitBtn: "Sign In",
  onSubmit: (form) => console.log(form),
  redirect: null,
};

export default Form;
