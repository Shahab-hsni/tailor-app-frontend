import styled from "styled-components";

import { Link } from "react-router-dom";

import { btnReset, v } from "../../../styles/variables";
import { H1 } from "../../ui/Texts";
export const SForm = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.white};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing} 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SFormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const SFormControl = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  width: max-content;
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.mdSpacing};
  }
`;

export const SLabel = styled.label`
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  background: #fff;
  padding: 0 10px;
  color: #999;
  transition: all 0.3s ease;

  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.gray3};
  width: 460px;
  height: 54px;
  padding: ${v.smSpacing};
  font-size: 16px;
  border-radius: ${v.borderRadius};
  box-sizing: border-box;
  display: block;
  background: transparent;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.gray4};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &:focus + ${SLabel} {
    font-size: 11px;
    top: -8px;
    color: ${({ theme }) => theme.primary};
  }
  &:not(:placeholder-shown) + ${SLabel} {
    font-size: 11px;
    top: -8px;
    transform: translateY(0);
    color: ${({ theme }) => theme.primary};
  }
  &:placeholder-shown + ${SLabel} {
    font-size: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  &::placeholder {
    color: transparent;
  }
`;

// export const SButton = styled.button`
//   ${btnReset};
//   width: 100%;
//   background: ${({ theme }) => theme.bgSecondary};
//   color: ${({ theme }) => theme.textSecondary};
//   padding: ${v.smSpacing};
//   display: flex;
//   justify-content: center;
//   border-radius: ${v.borderRadius};
//   margin-top: ${v.mdSpacing};
//   cursor: pointer;
// `;

export const SRedirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${v.smSpacing};
`;
export const SRedirectLabel = styled.span`
  color: ${({ theme }) => theme.text2};
`;

export const SRedirectLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
`;
