import { StyleSheet } from "react-native";

export const accountDataStyle = StyleSheet.create(
    {
        container: {
            width: '100%',
            height: '80%',
            backgroundColor: '#fa6b6b',
            borderRadius: 10,
        },
        accountImageContainer: {
            width: '40%',
            height: '40%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 10,
        },
        accountInformationContainer: {
            width: '80%',
            backgroundColor: 'white',
            height: '40%',
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
        },
        accountInformationText:{
            marginTop: '2%',
            
        }
    }
);