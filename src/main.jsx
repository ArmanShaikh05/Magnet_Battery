import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import { SidebarContextProvider } from "./context/sidebar.jsx";
import { GlobalDataContextProvider } from "./context/globalData.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalDataContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </GlobalDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
