import { StyleSheet } from "react-native";

export const navigationBarStyle = StyleSheet.create(
{
    container: {
        width: '100%',
        height: '75%',
        display: "flex",
        flexDirection: "row", 
        alignContent: "center",
        alignItems: "center", 
        justifyContent: "center" 
    },
    imageContainer: {
        alignItems: "center", 
    },
    navigationImage: {
        width: 45,
        height: 45,
    }
}
);