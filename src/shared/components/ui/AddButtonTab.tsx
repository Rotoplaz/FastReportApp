import { Ionicons } from '@expo/vector-icons';

import {StyleSheet, TouchableOpacity } from 'react-native';
import {useRouter} from "expo-router";

export const AddButtonTab = () => {
    const router = useRouter();
    const handlePress = () => {
        router.navigate("/(students)/AddReport")
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button} activeOpacity={0.85}>
            <Ionicons name="add-circle" size={30} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: -25,
        left: '50%',
        transform: [{ translateX: -40 }],
        backgroundColor: '#4F46E5',
        borderRadius: 24,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
    }
});