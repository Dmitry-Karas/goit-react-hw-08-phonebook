import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";

const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleH1 = styled.h1`
  ${flexCentered}

  font-size: 40px;
  margin-bottom: 40px;

  & svg {
    margin-right: 10px;
  }
`;

export const TitleH2 = styled.h2`
  ${flexCentered}

  color: var(--color-dark);

  & svg {
    margin-right: 10px;
  }
`;
