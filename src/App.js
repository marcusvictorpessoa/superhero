import React from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import { AppContainer } from "./styles";

function App() {

  return (
    <AppContainer>
      <Sidebar />
      <Container />
    </AppContainer>
  );
}

export default App;
