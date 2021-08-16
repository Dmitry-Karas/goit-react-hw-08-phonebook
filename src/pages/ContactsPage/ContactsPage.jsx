import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Container from "components/Container/Container";
import Filter from "components/Filter/Filter";
import Section from "components/Section/Section";
import React, { useEffect } from "react";
import { RiContactsBook2Fill, RiContactsFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/PuffLoader";
import { contactsOperations, contactsSelectors } from "redux/contacts";

const ContactsPage = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <h1>
            <RiContactsBook2Fill />
            Phonebook
          </h1>

          <ContactForm />

          {contacts.length > 0 && (
            <>
              <h2>
                <RiContactsFill />
                Contacts
              </h2>

              <Filter />

              <ContactList />
            </>
          )}
        </Container>
      </Section>
      <Loader loading={isLoading} />
    </>
  );
};

export default ContactsPage;
