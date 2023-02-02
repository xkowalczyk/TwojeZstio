import { StyleSheet } from "react-native";

const profilePageStyle = StyleSheet.create(
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
        logOutButtonContainer: {
            width: '80%',
            height: '10%',
            alignSelf: 'center',
            alignItems: 'center',
            borderColor: 'red',
            borderTopWidth: 2,
            marginTop: '10%'
        },
        accountDataContainer: {
            alignSelf: 'center',
            width: '90%',
            height: '60%',

        },
        footerNavigationContainer:{
            height: '10%',
            width: '100%',
        }
    }
);

export default profilePageStyle;