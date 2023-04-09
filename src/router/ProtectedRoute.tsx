import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  user: any;
  redirectTo?: string;
  children: ReactNode | ReactNode[];
}

export const ProtectedRoute: FC<Props> = ({
  user,
  children,
  redirectTo = "/login",
}) => {
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return children ? <>{children}</> : <Outlet />;
};
