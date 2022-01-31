import React from "react";
import { Routes, Route } from "react-router-dom";
import routeConstants from "../constants/routeConstants";

// LAZY loading all the components
const VisulizationPageComponent = React.lazy(
  () => import("../pages/Visualization")
);
const EditCityPageComponent = React.lazy(() => import("../pages/EditCity"));
const PageNotFoundComponent = React.lazy(() => import("../pages/PageNotFound"));

const AppRoutes = () => (
  <Routes>
    <Route
      path={routeConstants.HOME_PAGE}
      element={
        <React.Suspense fallback={<>...</>}>
          <VisulizationPageComponent />
        </React.Suspense>
      }
    />
    <Route
      path={routeConstants.EDIT_CITY}
      element={
        <React.Suspense fallback={<>...</>}>
          <EditCityPageComponent />
        </React.Suspense>
      }
    />
    <Route
      path={routeConstants.PAGE_NOT_FOUND}
      element={
        <React.Suspense fallback={<>...</>}>
          <PageNotFoundComponent />
        </React.Suspense>
      }
    />
  </Routes>
);
export default AppRoutes;
