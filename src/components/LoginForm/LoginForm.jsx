import { Form, Input, Label, Button } from "./LoginForm.styled";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type="email"
        id={emailInputId}
        name="email"
      />
      <Input
        onChange={handleChange}
        type="password"
        id={passwordInputId}
        name="password"
      />
      <Button>log in</Button>
    </Form>
  );
};

export default LoginForm;
