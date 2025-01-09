import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./components/pages/SignIn.jsx";
import SignUp from "./components/pages/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path="signin" element={<SignIn />} /> {/* SignIn route */}
      <Route path="signup" element={<SignUp />} /> {/* SignUp route */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
