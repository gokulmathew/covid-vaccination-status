import React from "react";
import { Routes, Route } from "react-router-dom";
import routeConstants from "../Constants/routeConstants";

// import PageNotFound from "../pages/PageNotFound";

const VisulizationPageComponent = React.lazy(
  () => import("../Pages/Visualization")
);

const AppRoutes = () => (
  <Routes>
    <Route
      path={routeConstants.homePage}
      element={
        <React.Suspense fallback={<>...</>}>
          <VisulizationPageComponent />
        </React.Suspense>
      }
    />
  </Routes>
);
export default AppRoutes;
