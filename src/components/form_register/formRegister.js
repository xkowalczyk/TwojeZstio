import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useState } from "react";
import formRegisterStyleContainers from "./style/formRegisterStyleContainers";
import formRegisterStyleComponents from "./style/formRegisterStyleComponents";
import { TextNavigation } from "../textNavigation/textNavigation";
import ParagraphText from "../textParagraph/textParagraph";
import auth, { firebase } from '@react-native-firebase/auth';

const FormRegister = (dataSender) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isShow, setIsShow] = useState(true)
    const validateData = () => {
        if(email != null && password != null){
            dataSender.dataSender(email, password);
        }
    }

    async function passwordReset(){
        try {
            await auth().sendPasswordResetEmail(email);
            Alert.alert('Sukces', 'Wyślemy Ci email z linkiem do resetowania hasła!');
        } catch (error) {
            if(error.code == 'auth/invalid-email'){
                Alert.alert('Błąd', 'Nie znaleziono takiego adresu email!');
            }
        }
    }

    function sendPasswordReset()
    {
        if(email == null){
            Alert.alert('Błąd', 'Podaj adres email w polu email!');
        } else{
            Alert.alert(
                "Twoje ZSTiO",
                "Czy na pewno chcesz zresetować hasło?",
                [
                  {
                    text: "Anuluj",
                    style: "cancel"
                  },
                  { text: "Tak", onPress: () => passwordReset() }
                ]
              );
        }
    }

    return(
        <View style={formRegisterStyleContainers.container}>
            <View style={formRegisterStyleContainers.inputContainer}>
                <TextInput placeholder="E-mail" 
                keyboardType="email-address"
                onChangeText={emailPreview => setEmail(emailPreview)}
                style={formRegisterStyleComponents.textInput} />
            </View>
            <View style={formRegisterStyleContainers.inputContainer}>
                <TextInput placeholder="Hasło" 
                keyboardType="default"
                secureTextEntry={isShow}
                onChangeText={passwordPreview => setPassword(passwordPreview)}
                style={formRegisterStyleComponents.textInput}/>
                <TouchableOpacity style={formRegisterStyleContainers.showHidePasswordContainer} onPress={()=>{
                    setIsShow(!isShow);
                }}>
                    {
                        isShow ? ( <Image source={require('../../assets/images/visibility_on.png')} style={formRegisterStyleComponents.showHidePasswordButton}/>)
                        : ( <Image source={require('../../assets/images/visibility_off.png')} style={formRegisterStyleComponents.showHidePasswordButton}/>)
                    }
                </TouchableOpacity>
            </View>
            <View style={formRegisterStyleContainers.submitContainer}>
                <TouchableOpacity 
                    style={formRegisterStyleComponents.submitButton}
                    onPress={validateData}
                    >
                        <Text style={formRegisterStyleComponents.submitButtonText}>{dataSender.buttonText}</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginTop: '5%'}}>
                <TouchableOpacity onPress={() => {sendPasswordReset()}}>
                    <ParagraphText text="Jeśli zapomniałeś hasła, kliknij aby zresetować" style={{color: 'black' , textDecorationLine: 'underline'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FormRegister;