import { StyleSheet } from "react-native";

export const messageModelStyle = StyleSheet.create(
    {
        container: {
            backgroundColor: '#ff3d3d',
            marginBottom: '5%',
            //alignItems: 'center',
            alignSelf: 'center',
            width: '90%',
            padding: '5%',
            borderRadius: 10,            
        },
        titleText: {
            fontWeight: 'bold',
            fontSize: 13,
            alignSelf: 'center',
        },
        titleTextWithMessage: {
            fontWeight: 'bold',
            fontSize: 15,
            alignSelf: 'center',
            marginBottom: '5%',
        },
        messageContainer: {
            //marginTop: '5%',
            backgroundColor: 'white',
            textAlign: 'center',
            //width: '100%',
            height: 'auto',
            padding: '2%',
            fontSize: 14,
            borderRadius: 10,
        },
        backgroundOpened: {
            backgroundColor: '#ff3d3d'
        },
        backgroundNormal:{
            backgroundColor: '#ff3d3d'
        }
    }
);