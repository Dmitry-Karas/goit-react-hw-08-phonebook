import { Form } from "./LoginForm.styled";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Grid,
  StylesProvider,
  Typography,
  IconButton,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { StyledAvatar } from "./LoginForm.styled";
import { StyledButton } from "./LoginForm.styled";
import { StyledField } from "./LoginForm.styled";
import { StyledLink } from "./LoginForm.styled";
import Section from "components/Section/Section";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <StylesProvider injectFirst>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar>
                <LockOutlinedIcon />
              </StyledAvatar>
              <Typography component="h1" variant="h6">
                Log in
              </Typography>
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
                disabled={!email || !password}
              >
                Log in
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Don't have an account?{"\u00A0"}
                <StyledLink to="/register">Sign up</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Section>
    </StylesProvider>
  );
};

export default LoginForm;
