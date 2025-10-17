import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { AddButtonTab } from "@/src/shared/components/ui/AddButtonTab";

export const JavaScriptTabsNavigation = () => {
    return (
        <SafeAreaInsetsContext.Consumer>
            {(insets) => (
                <View
                    style={{
                        flex: 1,
                        paddingTop: insets?.top,
                        backgroundColor: "rgba(240, 240, 240, 1)",
                    }}
                >
                    <Tabs
                        screenOptions={{
                            tabBarActiveTintColor: "blue",
                            headerShown: false,
                            tabBarStyle: {
                                position: "absolute",
                                height: 70,
                                paddingTop: 8,
                                paddingBottom: 12,
                                borderRadius: 24,
                                backgroundColor: "transparent",
                                elevation: 0
                            },
                            animation: "shift",
                            tabBarBackground: () => (
                                <BlurView
                                    tint="systemChromeMaterialLight"
                                    intensity={95}
                                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'transparent' }}
                                />
                            ),
                        }}
                    >

                        <Tabs.Screen
                            name="(students)/index"
                            options={{
                                href: "/",
                                title: "Inicio",
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="home" color={color} size={28} />
                                ),
                            }}
                        />

                        <Tabs.Screen
                            name="(students)/AddReport"
                            options={{
                                title: "Agregar",
                                tabBarButton: AddButtonTab ,
                            }}
                        />

                        <Tabs.Screen
                            name="(students)/MyReports"
                            options={{
                                href: "/(students)/MyReports",
                                title: "Mis Reportes",
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="newspaper" color={color} size={28} />
                                ),
                            }}
                        />
                    </Tabs>
                </View>
            )}
        </SafeAreaInsetsContext.Consumer>
    );
};

export default JavaScriptTabsNavigation;
