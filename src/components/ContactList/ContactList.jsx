import { BsTrash } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import { List, Item, Button } from "./ContactList.styled";

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>
              <MdContactPhone size="20" />
              {name}:
            </span>

            <span>{number}</span>

            <Button
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              <BsTrash size="20" />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
