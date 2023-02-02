import { StyleSheet } from "react-native";

const formRegisterStyleContainers = StyleSheet.create(
{
    container:{
        width: '80%',
        marginTop: '5%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputContainer:{
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: '5%',
        borderRadius: 7,
    },
    submitContainer:{
        width: '80%',
        alignSelf: 'center',
        height: '25%',
        marginTop: '5%',
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
    },
    showHidePasswordContainer:{
        width: '15%',
        position: 'absolute',
        alignSelf: 'flex-end',
    }
}
);

export default formRegisterStyleContainers;
