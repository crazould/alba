import { createContext, useContext, useState } from "react";

interface ITokenContext {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const TokenContext = createContext<ITokenContext>({
  token: null,
  setToken: () => {},
});

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useTokenContext() {
  return useContext(TokenContext);
}
