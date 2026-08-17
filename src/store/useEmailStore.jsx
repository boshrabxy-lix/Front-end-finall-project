import { create } from "zustand";
import { persist } from "zustand/middleware";


const useEmailStore = create(persist(
  (set) => ({
    email: "",
    setEmail: (email) => set({ email }),
    clearEmail: () => set({ email: "" }),
  }),
  { name: "reset-email-storage", storage: { getItem: (name) => JSON.parse(sessionStorage.getItem(name)), setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)), removeItem: (name) => sessionStorage.removeItem(name) } }
)
);

export default useEmailStore;