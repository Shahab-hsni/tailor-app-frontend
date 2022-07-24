import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import FontStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { PrimaryButton, SecondaryButton } from "./components/ui/Buttons";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Register";
import { lightTheme } from "./styles/theme";

function App() {
  let element = useRoutes([
    { path: "login", element: <SignIn /> },
    { path: "register", element: <SignUp /> },
    { path: "/", element: <SignIn /> },
  ]);
  const themeStyle = lightTheme;
  return (
    <ThemeProvider theme={themeStyle}>
      <Layout>
        <FontStyles />
        {/* <PrimaryButton href="#">Hello world</PrimaryButton>
      <SecondaryButton href="#">Hello world</SecondaryButton> */}
        {element}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
