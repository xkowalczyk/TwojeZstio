import { SafeAreaView, View, Alert, Text, Image } from "react-native";
import { useEffect } from "react";

import auth from '@react-native-firebase/auth';

import TextHeader from "../../components/textHeader/textHeader";
import FormRegister from "../../components/form_register/formRegister";
import ParagraphText from "../../components/textParagraph/textParagraph";
import { TextNavigation } from "../../components/textNavigation/textNavigation";

const RegisterPage = ({navigation}) => {    

    useEffect(() => {
      if(auth().currentUser != null){
          navigation.navigate('Home');
      }
    }, []);

    const sendData = (email, password) => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Alert.alert('Sukces', 'Konto zostało utworzone!');
            navigation.navigate('Home');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Błąd', 'Ten adres email jest już używany!');
            }

            if (error.code === 'auth/invalid-email') {
            Alert.alert('Błąd', 'Ten adres email jest nieprawidłowy!');
            }
        });
      };

    function goToLogin(){
      navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <View>
              <TextHeader title="Rejestracja" 
                  subtitle="Zarejestruj się, aby móc korzystać z aplikacji." 
                  sizeTitle={parseInt('20')} 
                  sizeSubTitle={parseInt('15')}
                  titleStyle={{color: 'red'}}
                  subTitleStyle={{color: 'black'}}
              />
            </View>
            <View>
              <FormRegister
                  dataSender = {sendData}
                  buttonText = "Zarejestruj"/>
                  <ParagraphText
                text="*Hasło musi zawierać minimum 6 znaków"
                style={{textAlign: 'center', color: 'black', width: '80%', alignSelf: 'center', fontSize: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
            <TextNavigation text="Jeśli posiadasz konto, kliknij aby się zalogować" onPressNavigation={goToLogin}/>
            </View>
            <View>
              <ParagraphText
                text="Twoje dane są szyfrowane, administrator nie ma do nich dostępu."
                style={{textAlign: 'center', color: 'black', width: '80%', alignSelf: 'center', marginTop: 10}}
              />
            </View>
        </SafeAreaView>
        
      );
};

export default RegisterPage;