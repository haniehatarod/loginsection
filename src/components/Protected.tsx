import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";
import Loader from "./Loader";

export default function Protected({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
 if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
 

  return children;
}
