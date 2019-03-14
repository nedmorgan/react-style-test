import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { bounce, hinge } from 'react-animations'

const ButtonStyle = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  /* margin: 20px; */
  color: #fff;
  position: relative;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`

const ErrorButton = styled(ButtonStyle)`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #CE3323;
  &:hover{
    background-color: #FF6656;
  }
`

const WarningButton = styled(ButtonStyle)`
  background-color: yellow;
  box-shadow: 0px 5px 0px 0px tomato;
  &:hover{
    background-color: orange;
  }
`

const SuccessButton = styled(ButtonStyle)`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
  &:hover{
    background-color: #48E68B;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const rotateBack360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(-360deg);
	}
`;

const bounceAnimation = keyframes`${bounce}`

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation} infinite;
`

const hingeAnimation = keyframes`${hinge}`

const HingeDiv = styled.div`
  animation: 3s ${hingeAnimation} infinite;
`

const RotatingDiv = styled.div`
  animation: ${rotate360} 2s infinite;
`;

const RotatingBackDiv = styled.div`
  animation: ${rotateBack360} 5s infinite;
`;

class Button extends Component {

  render() {

    return (
      <FlexContainer>
        <RotatingDiv>
          <ButtonStyle>Click Me</ButtonStyle>
        </RotatingDiv>
        <RotatingBackDiv>
          <ErrorButton>Error</ErrorButton>
        </RotatingBackDiv>
        <BouncyDiv>
          <WarningButton>Warning Button</WarningButton>
        </BouncyDiv>
        <HingeDiv>
          <SuccessButton>Success</SuccessButton>
        </HingeDiv>
      </FlexContainer>
    )
  }
}

export default Button