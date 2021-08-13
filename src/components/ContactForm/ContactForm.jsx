import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledForm,
  InputContainer,
  Input,
  Label,
  Button,
} from "./ContactForm.styled";
import { FiUser, FiPhone, FiUserPlus } from "react-icons/fi";
import { contactsOperations, contactsSelectors } from "redux/contacts";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const checkContact = (contacts, name, number) => {
    const includedName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    const includedNumber = contacts.find(
      (contact) =>
        contact.number.replace(/[^0-9]/g, "") === number.replace(/[^0-9]/g, "")
    );

    if (includedName) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${name.toUpperCase()}\nis already in contacts!`,
        confirmButtonColor: "indianred",
      });

      return includedName;
    }

    if (includedNumber) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
        confirmButtonColor: "indianred",
      });
      return includedNumber;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existedContact = checkContact(contacts, name, number);

    if (existedContact) return;

    dispatch(contactsOperations.addContact({ /*id: nanoid(),*/ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          placeholder="Dmitry Karas"
          maxLength="40"
          required
        />

        <Label htmlFor={nameInputId}>
          <FiUser size="22" />
          Name
        </Label>
      </InputContainer>

      <InputContainer>
        <Input
          id={telInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          autoComplete="off"
          placeholder="444-55-66"
          maxLength="17"
          required
        />
        <Label htmlFor={telInputId}>
          <FiPhone size="22" />
          Number
        </Label>
      </InputContainer>

      <Button type="submit">
        <FiUserPlus size="30" />
        add
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
