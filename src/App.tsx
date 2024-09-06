import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { theme } from "./Styles";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
