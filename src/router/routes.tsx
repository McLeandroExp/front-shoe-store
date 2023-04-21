import EcommerceApp from "../EcommerceApp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { LandingPage } from "../screens/LandingPage";
import { Gender } from "../screens/Gender";
import { About } from "../screens/About";
import { Contact } from "../screens/Contact";
import ErrorPage from "../screens/Error-Page";
import LoginPage from "../screens/loginPage";
import SignInPage from "../screens/signInPage";
import { Collections } from "../screens/Collections";
import { IUsuario } from "../types/models";

const EcommerceRouter = () => {
  const { userToken, setUserToken } = useContext(EcommerceContext);
  useEffect(() => {
    const userTokenString = localStorage.getItem("userToken");
    const userTokenLS: {
      user: IUsuario;
      token: string;
    } | null = userTokenString ? JSON.parse(userTokenString) : null;
    setUserToken(userTokenLS);
  }, []);

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
            element={<Gender gender="hombre" />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/women"
            element={<Gender gender="mujer" />}
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
