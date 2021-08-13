import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { AiOutlineFileSearch } from "react-icons/ai";
import { InputContainer, Input, Label } from "./Filter.styled";
import { changeFilter } from "redux/contacts/contactsSlice";
import { contactsSelectors } from "redux/contacts";

const Filter = () => {
  const filterInputId = nanoid();

  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <InputContainer>
        <Input
          id={filterInputId}
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Dmitry"
        />
        <Label htmlFor={filterInputId}>
          <AiOutlineFileSearch size="30" />
          Find contact
        </Label>
      </InputContainer>
    </>
  );
};

export default Filter;
