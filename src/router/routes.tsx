import ErrorPage from "../components/error/error-page";
import LoginPage from "../components/login/loginPage";
import SignInPage from "../components/login/signInPage";
import EcommerceApp from "../EcommerceApp";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const EcommerceRouter = () => {
  const user = { nombre: "omar", id: "123456" };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute user={user}>
              <EcommerceApp />
            </ProtectedRoute>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/sign"
          element={<SignInPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/*"
          element={<Navigate to="/login" />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default EcommerceRouter;
