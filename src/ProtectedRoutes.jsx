import React from "react";
import { Route } from "react-router-dom";

function ProtectedRoute({ }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;