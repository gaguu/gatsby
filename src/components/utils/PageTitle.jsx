import React from "react";
import styled from "styled-components";

function PageTitle({ children = "", ...props }) {
  let str = children.split(" ");
  return (
    <h1 {...props}>
      {str.slice(0, str.length - 1).join(" ")}
      <span> {str[str.length - 1]}</span>
    </h1>
  );
}

export default styled(PageTitle)`
  color: ${props => (props.variant === "light" ? "white" : "black")};
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 15px;

  span {
    color: #04b962;
  }
`;
