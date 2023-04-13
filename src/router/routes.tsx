import ErrorPage from "../components/error/error-page";
import LoginPage from "../components/login/loginPage";
import SignInPage from "../components/login/signInPage";
import EcommerceApp from "../EcommerceApp";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { LandingPage } from "../screens/LandingPage";
import { Gender } from "../screens/Gender";
import { About } from "../screens/About";
import { Contact } from "../screens/Contact";
import { Collections } from "../screens/Collections";

const EcommerceRouter = () => {
  const { userToken } = useContext(EcommerceContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EcommerceApp />} errorElement={<ErrorPage />}>
          <Route index element={<LandingPage />} />
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
            path="/collections"
            element={<Collections />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/men"
            element={<Gender />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/women"
            element={<Gender />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/about"
            element={<About />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contact"
            element={<Contact />}
            errorElement={<ErrorPage />}
          />
        </Route>

        <Route
          path="/*"
          element={<Navigate to="/" />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default EcommerceRouter;
