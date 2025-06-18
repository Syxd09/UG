"use client";

import { Provider } from "react-redux";
import { store } from "../store/store"; // adjust if your store path is different

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
