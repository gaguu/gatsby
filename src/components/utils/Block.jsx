import styled from "styled-components";
import React from 'react'
import Background from 'gatsby-background-image';

const StyledBackground =  styled(Background)`
  min-height: 480px;
  background-position: center center;
  background-size: cover;
  position: relative;

  padding: 60px 0px 60px 0px;
  color: ${({ color }) => color};

`;

const Block = styled.div`
  min-height: 480px;
  background-position: center center;
  background-size: cover;
  position: relative;

  padding: 60px 0px 60px 0px;
  color: ${({ color }) => color};
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 5;
  background-color: ${({overlay = 'black'}) => overlay.color};
  opacity: ${({overlay = 0}) => overlay.opacity};

`

const BlockForPreview = styled.div`
  min-height: 480px;
  background-image: url(${({ url }) => url});
  background-position: center center;
  background-size: cover;
  position: relative;

  padding: 60px 0px 60px 0px;
  color: ${({ color }) => color};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: ${({ overlay }) => overlay && overlay.color};
    opacity: ${({ overlay }) => overlay && overlay.opacity};
  }
`;


export default function({url: image, children, ...props}){
  if(typeof image === 'string'){
    return (
      <BlockForPreview {...props} url={image} >
        {children}
      </BlockForPreview>
    )
  }
  if(image){
    
    return (
    <StyledBackground 
      critical={true}
      fluid={image.childImageSharp.fluid} {...props}>
        <Overlay {...props}/>
         {children}
     </StyledBackground>
    )
  }

  return <Block>{children} </Block>
}
