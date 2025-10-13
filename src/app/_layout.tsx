import "../global.css";
import ModernTabsNavigation from "@/src/shared/components/navigation/ModernTabsNavigation";
import NativeTabsNavigation from "@/src/shared/components/navigation/NativeTabsNavigation";
import {studentsRoutesNative} from "@/src/students/routes/studentsRoutesNative";
import {studentsJavascriptRoutes} from "@/src/students/routes/studentsJavascriptRoutes";
import JavaScriptTabsNavigation from "@/src/shared/components/navigation/JavaScriptTabsNavigation";
import {studentsRoutes} from "@/src/students/routes/studentsRoutesModern";


export default function RootLayout() {
    return (
        <>
            {/*<JavaScriptTabsNavigation routes={studentsJavascriptRoutes} />*/}
            <ModernTabsNavigation routes={studentsRoutes} />
            {/*<NativeTabsNavigation routes={studentsRoutesNative} />*/}
        </>
    );
}
