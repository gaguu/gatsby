import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 0 auto;
  max-width: ${({ theme: { containerMaxWidth } }) => containerMaxWidth};

  ${down("sm")} {
    flex-direction: column;
  }
`;


export const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
`;
