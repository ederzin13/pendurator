import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  token: string;
};

type Actions = {
  save: (token: string) => void;
  clear: () => void;
};

const useAuth = create<State & Actions>()(
  persist(
    (set) => ({
      //inicialização
      token: "",
      //ação de salvar o token no estado global
      // save: (token) => set({ token }),
      save: (token) => set({ token }),
      clear: () => set({ token: "" }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useAuth;
