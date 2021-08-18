import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";

const UserMenu = () => {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <>
      <p>{username}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </>
  );
};

export default UserMenu;
