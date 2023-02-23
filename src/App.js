import React from "react";
import Header from "./Components/Header/Header";
import { Container } from "@mui/system";
import { AppRoutes } from "./Components/AppRoutes";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
