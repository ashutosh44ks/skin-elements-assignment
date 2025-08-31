import type { JwtPayload } from "jwt-decode";
import { createContext } from "react";

export interface User extends JwtPayload {
  /** The authorized party to whom the token was issued. */
  azp: string;
  /** The user's email address. */
  email: string;
  /** A boolean indicating if the email address is verified. */
  email_verified: boolean;
  /** The user's full name. */
  name: string;
  /** The URL of the user's profile picture. */
  picture: string;
  /** The user's given (first) name. */
  given_name: string;
  /** The user's family (last) name. */
  family_name: string;
}

export type AuthContextType = {
  user: User | null;
  storeUserInfo: (userData: User) => void;
  removeUserInfo: () => void;
};
const defaultAuthContext: AuthContextType = {
  user: null,
  storeUserInfo: () => {},
  removeUserInfo: () => {},
};

// Create the context with an initial value of undefined.
// The custom hook will handle the null check.
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);
