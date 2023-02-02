import { View } from "react-native";
import { useEffect, useState } from "react";

import auth from '@react-native-firebase/auth';


import { accountDataStyle } from "./style/accountDataStyle";

import ParagraphText from "../textParagraph/textParagraph";

export const AccountData = () => {
    const [displayName, setDisplayName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerified, setEmailVerified] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    async function setData()
    {
        setDisplayName(await auth().currentUser.displayName);
        setPhoneNumber(await auth().currentUser.phoneNumber);
        setEmail(await auth().currentUser.email);
        setEmailVerified(await auth().currentUser.emailVerified);
        setPhotoURL(await auth().currentUser.photoURL);
    }


    useEffect(() => {
        setDisplayName(auth().currentUser.displayName);
        setPhoneNumber(auth().currentUser.phoneNumber);
        setEmail(auth().currentUser.email);
        setEmailVerified(auth().currentUser.emailVerified);
        setPhotoURL(auth().currentUser.photoURL);
        setTimeout(() => {
            if(displayName == null || displayName == ""){
                setDisplayName("Nie podano");
            }
            if(phoneNumber == null || phoneNumber == ""){
                setPhoneNumber("Nie podano");
            }
            if(photoURL == null || photoURL == ""){
                setPhotoURL("Nie podano");
            }
            if(emailVerified == false || emailVerified == ""){
                setEmailVerified("Nie");
            }
        }, 1000);
    }, []);

    return(
        <View style={accountDataStyle.container}>

            <View style={accountDataStyle.accountInformationContainer}>
                <ParagraphText text={"Nazwa użytkownika: " + displayName} style={accountDataStyle.accountInformationText}/>
                <ParagraphText text={"Numer telefonu: " + phoneNumber} style={accountDataStyle.accountInformationText}/>
                <ParagraphText text={"Adres e-mail: " + email} style={accountDataStyle.accountInformationText}/>
                <ParagraphText text={"E-mail zweryfikowany: " + emailVerified} style={accountDataStyle.accountInformationText}/>
            </View>

        </View>
    );
}