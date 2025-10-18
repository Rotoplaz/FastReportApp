
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {User} from "@/src/auth/interfaces";

interface AuthState {
    user: User | null;
    jwt: string | null;
    isAuthenticated: boolean;
    login: (data: { user: User; jwt: string }) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            jwt: null,
            isAuthenticated: false,

            login: ({ user, jwt }) =>
                set({
                    user,
                    jwt,
                    isAuthenticated: true,
                }),

            logout: async () => {
                set({
                    user: null,
                    jwt: null,
                    isAuthenticated: false,
                });
                // Limpia el storage persistido
                await AsyncStorage.removeItem("auth-storage");
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                jwt: state.jwt,
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
