import "../global.css";

import {JavaScriptTabsNavigation} from "@/src/students/navigation/JavaScriptTabsNavigation";
import {useAuthStore} from "@/src/auth/store/useAuthStore";
import {LoginScreen} from "@/src/auth/screens/LoginScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    const isAuthenticated = useAuthStore(state=> state.isAuthenticated);

    if(!isAuthenticated){
        return <LoginScreen />;
    }

    return (
        <SafeAreaProvider>
            <JavaScriptTabsNavigation  />
        </SafeAreaProvider>
    );
}
