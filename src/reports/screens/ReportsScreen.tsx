
import { FlatList, View, Text, StyleSheet } from "react-native";
import {TAB_BAR_BOTTOM, TAB_BAR_HEIGHT} from "@/src/config/constants/ui";
import {useReports} from "@/src/reports/hooks/useReports";
import {ReportCard} from "@/src/reports/components/ReportCard";

export  const ReportsScreen = ()=> {

    const {annualReports} = useReports();
    return (
        <View className="flex-1 px-4">
            <Text className="text-3xl mt-8 font-semibold">Reportes En Tendencia</Text>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={annualReports}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ReportCard report={{...item}} />
                    )}
                    contentContainerStyle={{
                        paddingVertical: 20,
                        paddingBottom: 20 + TAB_BAR_HEIGHT + TAB_BAR_BOTTOM,
                    }}
                />
            </View>
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
