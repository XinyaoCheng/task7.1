import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { JobsProvider } from "./context/jobs.context";
import { UsersProvider } from "./context/users.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <JobsProvider>
        <UsersProvider>
        <App />
        </UsersProvider>
      </JobsProvider>
    </BrowserRouter>
  </StrictMode>
);
