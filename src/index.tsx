import React from "react";
import ReactDOM from "react-dom/client";

import { EcommerceProvider } from "./context/EcommerceProvider";

import "./styles/styles.scss";
import EcommerceRouter from "./router/routes";

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <EcommerceProvider>
      <EcommerceRouter />
    </EcommerceProvider>
  </React.StrictMode>
);
