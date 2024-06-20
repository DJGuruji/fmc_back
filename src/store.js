import { create } from "zustand";
import { removeSession, setSession, getSession, logoutUser as clearSession } from "./lib/session";

const useGlobalStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
    if (user) {
      setSession("user_data", JSON.stringify(user));
    } else {
      removeSession("user_data");
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    clearSession();
  },
}));

export default useGlobalStore;
