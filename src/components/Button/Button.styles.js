import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid orange;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "orange"};
  color: ${(props) => (props.variant === "outline" ? "orange" : "#fff")};
  text-align: center;
  padding: 15px 32px;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "orange"};
    color: ${(props) => (props.variant !== "outline" ? "orange" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    transform: translateY(4px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 5s linear;
`

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`