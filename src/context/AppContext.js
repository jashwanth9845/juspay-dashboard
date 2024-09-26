// context.js
import React, { createContext, useState, useCallback, useEffect } from "react";

// Create a context for the application state
export const AppContext = createContext();

// The AppProvider component will wrap the application and provide context values
export const AppProvider = ({ children }) => {
  // State for managing the theme (light/dark) with initial value from localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // State to manage the visibility of the side navigation
  const [sideNav, setSideNav] = useState(true);

  // State to manage the visibility of the notification navigation
  const [notificationNav, setNotificationNav] = useState(true);

  // State to manage the breadcrumb navigation
  const [breadCrumb, setBreadCrumb] = useState([]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Update localStorage when the theme changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Memoize the handleBreadCrumb function to avoid unnecessary re-renders when breadCrumb updates
  const handleBreadCrumb = useCallback((data) => {
    if (!data) return;
    setBreadCrumb(data);
  }, []);

  // Function to toggle the visibility of the side navigation
  const handleSideNav = () => {
    setSideNav((prev) => !prev);
  };

  // Function to toggle the visibility of the notification navigation
  const handleNotificationNav = () => {
    setNotificationNav((prev) => !prev);
  };

  // Provide context values to the application
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        handleBreadCrumb,
        handleNotificationNav,
        sideNav,
        handleSideNav,
        breadCrumb,
        notificationNav,
      }}
    >
      {/* Apply the theme class to the application wrapper */}
      <div className={`app ${theme}`}>{children}</div>
    </AppContext.Provider>
  );
};
