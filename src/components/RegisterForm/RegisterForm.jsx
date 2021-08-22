import { Form } from "./RegisterForm.styled";
import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import {
  Grid,
  IconButton,
  StylesProvider,
  Typography,
} from "@material-ui/core";
import Section from "components/Section/Section";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import { StyledAvatar } from "./RegisterForm.styled";
import { StyledField } from "./RegisterForm.styled";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { StyledButton } from "./RegisterForm.styled";
import { StyledLink } from "./RegisterForm.styled";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <StylesProvider injectFirst>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar />
              <Typography component="h1" variant="h6">
                Sign up
              </Typography>
            </Grid>
            <Grid item>
              <StyledField
                id={nameInputId}
                name="name"
                type="text"
                label="Name"
                placeholder="Dmitry"
                autoComplete="off"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ endAdornment: <AccountCircle /> }}
              />
            </Grid>
            <Grid item>
              <StyledField
                id={emailInputId}
                name="email"
                type="email"
                label="Email"
                autoComplete="off"
                placeholder="your_email@mail.com"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ endAdornment: <MailOutlineIcon /> }}
              />
            </Grid>
            <Grid item>
              <StyledField
                id={passwordInputId}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="MySup3rP7SSw0rd"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="end"
                      style={{ position: "absolute", right: 0 }}
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item align="center">
              <StyledButton
                type="submit"
                color="primary"
                disabled={!name || !email || !password}
              >
                Sign up
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Already have an account?{"\u00A0"}
                <StyledLink to="/login">Log in</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Section>
    </StylesProvider>
  );
};

export default RegisterForm;
