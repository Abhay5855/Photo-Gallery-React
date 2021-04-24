import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App"

import {chakraProvider} from "@chakra-ui/core";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <chakraProvider>
    
      <App />

    </chakraProvider>
  
  </StrictMode>,
  rootElement
);
