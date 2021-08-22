import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Container from "components/Container/Container";
import Filter from "components/Filter/Filter";
import Section from "components/Section/Section";
import React, { useEffect } from "react";
import { RiContactsBook2Fill, RiContactsFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import { TitleH2 } from "./ContactsPage.styled";
import { TitleH1 } from "./ContactsPage.styled";

const ContactsPage = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <TitleH1>
            <RiContactsBook2Fill />
            Phonebook
          </TitleH1>

          <ContactForm />

          {contacts.length > 0 && (
            <>
              <TitleH2>
                <RiContactsFill />
                Contacts
              </TitleH2>

              <Filter />

              <ContactList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default ContactsPage;
