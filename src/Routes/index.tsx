import React from "react";
import { Routes, Route } from "react-router-dom";
import routeConstants from "../constants/routeConstants";

// import PageNotFound from "../pages/PageNotFound";

const VisulizationPageComponent = React.lazy(
  () => import("../pages/Visualization")
);
const EditCityPageComponent = React.lazy(() => import("../pages/EditCity"));

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
    <Route
      path={routeConstants.editCity}
      element={
        <React.Suspense fallback={<>...</>}>
          <EditCityPageComponent />
        </React.Suspense>
      }
    />
  </Routes>
);
export default AppRoutes;
