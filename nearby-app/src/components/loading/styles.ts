import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme"
import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/core";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100]
    }
})