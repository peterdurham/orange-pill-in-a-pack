import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const ButtonWrapper = styled.button`
  border: 1px solid rgb(209, 213, 219);
  cursor: pointer;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  background: #fff;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: rgb(249, 250, 251);
    border: 1px solid rgb(156, 163, 175);
  }
`;

const Button = ({ children, disabled }) => {
  return <ButtonWrapper disabled={disabled}>{children}</ButtonWrapper>;
};

export default Button;
