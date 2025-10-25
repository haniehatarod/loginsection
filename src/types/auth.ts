import type { JwtPayload } from "jwt-decode";

export type AuthContextType = {
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
  loading:boolean
};
