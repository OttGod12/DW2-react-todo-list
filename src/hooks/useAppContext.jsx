import { useContext } from "react";
import { AppContext } from "../contexts";

export function useAppContext() {
  const contexto = useContext(AppContext);

  return contexto;
}
