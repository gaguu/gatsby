import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import Linkedin from "@iconify/icons-fa/linkedin";
import styled, { keyframes } from "styled-components";

const linkedInKeyframe = keyframes`
      0% {
        transform: scale(1)
      }
      50% {
        transform: scale(0.85)
      }
      100%{
        transform: scale(1);
      }
    `;
const IconContainer = styled.a`
  color: white;
  line-height: 1;
  display: inline-block;
  padding: 8px 10px;
  margin: 0 auto;
  font-size: 15px;
  border-radius: 5px;

  &:hover {
    background: #0077b5;
    animation: ${linkedInKeyframe} 0.8s ease-out infinite;
  }
`;

export default function(props) {
  return (
    <IconContainer {...props}>
      <Icon icon={Linkedin} />
    </IconContainer>
  );
}
