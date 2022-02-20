import React from "react";
import Dashboard from "./components/LandingPage";
import { Route, Routes } from "react-router";
import { useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";

/*Routes is used to be Switch*/
const Router = () => {
  /* nesting routes*/
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/sing-in" element={<SignIn />} />
        <Route path="/dashboard" element={<LandingPage />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );

  /* object-based routes
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "games", element: <Games /> },
    { path: "game-details/:id", element: <GameDetails /> },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "/", element: <DashboardDefaultContent /> },
        { path: "inbox", element: <Inbox /> },
        { path: "settings-and-privacy", element: <SettingsAndPrivacy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
*/
};
export default Router;
