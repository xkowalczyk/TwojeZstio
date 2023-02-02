import { StyleSheet } from "react-native";

const formRegisterStyleComponents = StyleSheet.create(
{
    submitButton:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText:{
        color: 'black',
        fontFamily: 'RobotoCondensed-Regular',

    },
    textInput:{
        backgroundColor: 'white',
        textAlign: 'center',    
        color: 'black',    
        fontFamily: 'RobotoCondensed-Regular',
    },
    showHidePasswordButton:{
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginRight: '15%',
        width: '60%'
    },
    
}
);

export default formRegisterStyleComponents;