import styled from "@emotion/styled/macro";
import { Avatar, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin: 0 auto;
  padding: 40px;
  max-width: 400px;
  background-color: var(--color-bg);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 5px;
  border-radius: 5px;
`;

export const StyledButton = styled(Button)`
  padding: 5px 10px;
  border: 2px solid var(--color-light);

  color: var(--color-light);
  background-color: transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: transparent;
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

export const StyledField = styled(TextField)`
  label {
    color: var(--color-light);
  }

  svg {
    color: var(--color-dark);
  }

  .MuiInput-underline::before {
    border-bottom: 2px solid var(--color-light);
  }
  .MuiInput-underline:hover::before {
    border-bottom-color: var(--color-accent);
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin-bottom: 20px;

  background-color: var(--color-dark);
  color: var(--color-bg);
`;

export const StyledLink = styled(Link)`
  color: var(--color-accent);
  text-decoration: underline;
`;
