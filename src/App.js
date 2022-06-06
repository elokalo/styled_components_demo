import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./components/Button/Button";
import logo from "./logo.svg";
import "./styles.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI"
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledButton
          type="submit"
          onClick={() => console.log("click styled button")}
        >
          Styled Button
        </StyledButton>
        <div>
          <br />
        </div>
        <StyledButton
          variant="outline"
          onClick={() => console.log("click styled button")}
        >
          Styled Button
        </StyledButton>
        <div>
          <br />
        </div>
        {/**
         * Styled-components library provides a polymorphic funcionality
         * you can convert HTML Elements e.g. you use a Button like anchor
         */}
        <FancyButton as="a">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button with Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
