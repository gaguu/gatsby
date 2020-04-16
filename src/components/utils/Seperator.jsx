import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  width: 15vw;
  font-weight: bold;

  margin: 0 auto;
  &::after,
  &::before {
    /* min-width: 100% */
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background: ${({ theme: { colors } }) => colors.green};
    margin: 0px 5px;
  }
  i {
    font-size: 25px;
  }
`;
