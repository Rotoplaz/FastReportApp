import { View, Text } from "react-native";


import { Ionicons } from "@expo/vector-icons";
import {Priority, Report, Status} from "@/src/reports/interfaces/reports.interfaces";
import {cn} from "@/src/shared/utils/cn";

interface Props {
    report: Report;
}

const priorityColors: Record<Priority, string> = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-600",
    low: "bg-green-100 text-green-600",
};

const iconsStatusColor: Record<Priority, string> = {
    high: "red",
    medium: "orange",
    low: "green",
}
export const ReportCard = ({ report }: Props) => {
    return (
        <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100">

            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-lg font-semibold text-gray-900">
                    {report.title}
                </Text>

                <View
                    className={cn(
                        "flex-row items-center gap-1 rounded-full px-2 py-1",
                        priorityColors[report.priority]
                    )}
                >
                    <Ionicons name="alert-circle" size={14} color={iconsStatusColor[report.priority]} />
                    <Text
                        className={cn(
                            "capitalize text-xs font-medium",
                            priorityColors[report.priority].split(" ")[1]
                        )}
                    >
                        {report.priority}
                    </Text>
                </View>
            </View>


            <Text className="text-gray-600 text-sm mb-3">
                {report.description}
            </Text>


            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1">
                    <Ionicons name="location" size={14} color="#ef4444" />
                    <Text className="text-xs text-gray-500">{report.location}</Text>
                </View>

                <View className="flex-row items-center gap-1">
                    <Ionicons name="time-outline" size={14} color="#22c55e" />
                    <Text className="text-xs text-gray-500">
                        {new Date(report.createdAt).toLocaleTimeString()}
                    </Text>
                </View>

                <View className="flex-row items-center gap-1">
                    <Ionicons name="hourglass-outline" size={14} color="blue" />
                    <Text
                        className={cn(
                            "text-xs font-medium capitalize",
                        )}
                    >
                        {report.status.replace("_", " ")}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ReportCard;
