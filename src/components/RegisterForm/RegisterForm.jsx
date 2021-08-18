import { Form, Input, Label, Button } from "./RegisterForm.styled";
import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" id={nameInputId} name="name" />
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
      <Button>Register</Button>
    </Form>
  );
};

export default RegisterForm;
