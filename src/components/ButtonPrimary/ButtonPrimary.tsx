import React from "react";

// types
import { ButtonPrimaryPropsType } from "./ButtonPrimaryTypes";

// styles
import { StyledButton } from "./ButtonPrimary.styles";

const ButtonPrimary = ({ title, onClick, type = "button", disabled }: ButtonPrimaryPropsType) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default ButtonPrimary;
