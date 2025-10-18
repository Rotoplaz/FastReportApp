import React from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/src/auth/store/useAuthStore";
import { router } from "expo-router";
import {login} from "@/src/auth/actions/login";

const formSchema = z.object({
    code: z.string().min(1, "El código es requerido"),
    password: z.string().min(1, "La contraseña es requerida"),
});

type FormData = z.infer<typeof formSchema>;

export const LoginScreen = () => {
    const { login: loginStore } = useAuthStore();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: "",
            password: "",
        },
    });

    const onSubmit = async (values: FormData) => {
        try {

            const user = await login({
                code: values.code,
                password: values.password,
            });

            if (!user) {
                return
            }

            loginStore(user);
            router.replace("/(students)");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-black">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="flex-1 justify-center px-8"
            >
                <View className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-800">
                    <Text className="text-2xl font-bold text-center mb-6 text-neutral-900 dark:text-neutral-100">
                        Iniciar Sesión
                    </Text>

                    {/* Código */}
                    <View className="mb-4">
                        <Text className="text-neutral-700 dark:text-neutral-300 mb-1">Código</Text>
                        <Controller
                            control={control}
                            name="code"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className="border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                    placeholder="Tu código"
                                    placeholderTextColor="#9ca3af"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.code && (
                            <Text className="text-red-500 text-sm mt-1">{errors.code.message}</Text>
                        )}
                    </View>

                    {/* Contraseña */}
                    <View className="mb-6">
                        <Text className="text-neutral-700 dark:text-neutral-300 mb-1">Contraseña</Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    secureTextEntry
                                    className="border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                    placeholder="••••••••••"
                                    placeholderTextColor="#9ca3af"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.password && (
                            <Text className="text-red-500 text-sm mt-1">{errors.password.message}</Text>
                        )}
                    </View>

                    {/* Botón */}
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        className="bg-blue-500 active:bg-blue-600 rounded-xl py-3"
                    >
                        <Text className="text-center text-white font-semibold text-base">
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-center text-neutral-500 mt-8">
                    Solo personal autorizado
                </Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;
