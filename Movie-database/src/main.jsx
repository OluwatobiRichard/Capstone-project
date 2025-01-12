import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import SavedMoviesPage from "./pages/SavedMoviesPage.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import TrendingNowPage from "./pages/TrendingNowPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SearchResults from "./pages/SearchResults.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="UpcomingMoviesPage" element={<UpcomingMoviesPage />} />
      <Route path="TrendingNowPage" element={<TrendingNowPage />} />
      <Route path="movie/:id" element={<MovieDetailsPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="saved" element={<SavedMoviesPage />} />
      <Route path="/search" element={<SearchResults />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);