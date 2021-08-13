import PuffLoader from "react-spinners/PuffLoader";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = ({ loading }) => {
  return (
    <LoaderWrapper>
      <PuffLoader loading={loading} color={"rosybrown"} size={400} />
    </LoaderWrapper>
  );
};
