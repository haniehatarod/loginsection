import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { JwtPayload } from "jwt-decode";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({});
export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<JwtPayload | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token ,"tokkkkkkk")
    if (token) {
      const decode = jwtDecode(token);
      setUser(decode);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("somthing went wrong");
  }
  return context;
}
