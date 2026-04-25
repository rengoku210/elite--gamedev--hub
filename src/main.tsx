import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

// Initialize the router
const router = getRouter();

// Create root element
const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Could not find root element with id 'app'");
}

// Render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
