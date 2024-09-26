import React from "react";
import Header from "./layout/header/Header";
import MainContent from "./pages";
import { AppProvider } from "./context/AppContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/sideNav/Sidebar";
import NotificationPanel from "./layout/Notifications/NotificationPanel";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundary>
          <div
            className="app-container"
            style={{ fontFamily: "var(--inter-font)" }}
          >
            <Sidebar />
            <div className="main-layout">
              <Header />
              <div className="content-area">
                <MainContent />
              </div>
            </div>
            <NotificationPanel />
          </div>
        </ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
