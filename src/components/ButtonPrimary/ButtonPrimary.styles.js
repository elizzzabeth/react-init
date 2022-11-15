import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
