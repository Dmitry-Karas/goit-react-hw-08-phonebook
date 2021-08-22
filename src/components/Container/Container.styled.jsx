import styled from "@emotion/styled/macro";

export const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 5px;

  background-color: var(--color-bg);

  @media screen and (max-width: 767px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
`;
