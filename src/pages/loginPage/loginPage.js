import { SafeAreaView, View, Alert, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from 'react';
import RegisterPage from "../registerPage/registerPage";

import { mainPageStyle } from "../mainPage/style/mainPageStyle";
import { loginPageStyle } from "./style/loginPageStyle";

import auth, { firebase } from '@react-native-firebase/auth';

import TextHeader from "../../components/textHeader/textHeader";
import FormRegister from "../../components/form_register/formRegister";
import ParagraphText from "../../components/textParagraph/textParagraph";
import AuthService from "../../services/authService/auth";
import { TextNavigation } from "../../components/textNavigation/textNavigation";
import { ResetPasswordDialog } from "../../components/resetPasswordDialog/resetPasswordDialog";

const LoginPage = (props) => {    

    useEffect(() => {
        if(auth().currentUser != null){
            navigation.navigate('Home');
        }
    }, []);

    async function sendData(email, password){
        await AuthService.login(email, password).then(() => {
            Alert.alert('Sukces', 'Zalogowano pomyślnie!');
            props.navigation.navigate('Home');
            console.log(auth().currentUser);
        }).catch((error) => {
            if(error.code == 'auth/invalid-email'){
                Alert.alert('Błąd', 'Ten adres email jest nieprawidłowy!');
            } 
            if(error.code == 'auth/user-not-found'){
                Alert.alert('Błąd', 'Nie ma takiego użytkownika!');
            }
            if(error.code == 'auth/wrong-password'){
                Alert.alert('Błąd', 'Nieprawidłowe hasło!');
            }
            if(error.code == 'auth/user-disabled'){
                Alert.alert('Błąd', 'Użytkownik został zablokowany!');
            }
        });
    }

    function goToRegister(){
        props.navigation.navigate('Register')
    }


    return (
        <View style={[loginPageStyle.container, {marginTop: 'auto', marginBottom: 'auto'}]}>
            <View>
              <TextHeader title="Logowanie" 
                  subtitle="Zaloguj się aby przejść dalej" 
                  sizeTitle={parseInt('20')} 
                  sizeSubTitle={parseInt('15')}
                  titleStyle={{color: 'red'}}
                  subTitleStyle={{color: 'black'}}
              />
            </View>
            <View>
              <FormRegister
                  dataSender = {sendData}
                  buttonText = "Zaloguj"
                  />
            </View>
            <View style={{alignSelf: 'center'}}>
                <TextNavigation text="Jeśli nie posiadasz konta, kliknij aby się zarejestrować" onPressNavigation={goToRegister}/>
            </View>
            <View>
              <ParagraphText
                text="Twoje dane są szyfrowane, administrator nie ma do nich dostępu."
                style={{textAlign: 'center', color: 'black', width: '80%', alignSelf: 'center', marginTop: 10}}
              />
            </View>
        </View>
      );
};

export default LoginPage;
/*
                <TextNavigation text="Jeśli nie posiadasz konta, kliknij aby się zarejestrować"/>
*/