import { StyleSheet } from "react-native";

export const surveysPageStyle = StyleSheet.create(
{
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        fontFamily: 'RobotoCondensed-Regular',
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderBottomWidth: 2,
    },
    bodyContainer: {
        width: '100%',
        height: '80%',
        marginTop: '5%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    surveysContainer: {
        width: '80%',
        alignSelf: 'center',
    },
    footerNavigationContainer:{
        height: '10%',
        width: '100%',
    }
}
);
