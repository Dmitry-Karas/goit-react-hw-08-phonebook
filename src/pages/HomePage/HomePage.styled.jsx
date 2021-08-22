import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 15px;

  background-color: var(--color-bg);
`;

export const Title = styled.h1`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  font-size: 40px;
  text-align: center;
  color: var(--color-dark);

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 1.8;
  /* text-align: center; */
  color: var(--color-dark);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--color-accent);
`;
