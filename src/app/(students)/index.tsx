
import { FlatList, View, Text, StyleSheet } from "react-native";
import {TAB_BAR_BOTTOM, TAB_BAR_HEIGHT} from "@/src/constants/ui";

export default function Index() {
    const data = Array.from({ length: 50 }, (_, i) => ({ id: i.toString() }));

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.rectangle}>
                        <Text style={styles.rectText}>Rectángulo {item.id}</Text>
                    </View>
                )}
                contentContainerStyle={{
                    paddingVertical: 20,
                    paddingBottom: 20 + TAB_BAR_HEIGHT + TAB_BAR_BOTTOM,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F0F0F0", alignItems: "center" },
    rectangle: {
        width: 300,
        height: 80,
        backgroundColor: "#007AFF",
        marginVertical: 10,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    rectText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
