import React from "react";
import ReactDOM from "react-dom/client";

import { EcommerceProvider } from "./context/EcommerceProvider";

import "./styles/styles.scss";
import EcommerceRouter from "./router/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <EcommerceProvider>
      <QueryClientProvider client={queryClient}>
        <EcommerceRouter />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </EcommerceProvider>
  </React.StrictMode>
);
