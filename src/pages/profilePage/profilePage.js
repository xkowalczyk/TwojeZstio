import { View } from "react-native";
import { useEffect, useState } from "react";

import profilePageStyle from "./style/profilePageStyle";
import auth from '@react-native-firebase/auth';


import TextHeader from "../../components/textHeader/textHeader";
import { NavigationBar } from "../../components/navigationBar/navigationBar";
import { ButtonLogOut } from "../../components/buttonLogOut/buttonLogOut";
import { AccountData } from "../../components/accountData/accountData";

const ProfilePage = ({navigation}) => {

    useEffect(() => {
        if(auth().currentUser == null){
            navigation.navigate('Login');
            
        }
        console.log(auth().currentUser);
    }, []);

    return(
        <View style={profilePageStyle.container}>
            <View style={profilePageStyle.headerContainer}>
                <TextHeader title="Twoje ZSTiO" sizeTitle={parseInt("20")} subtitle="Ustawienia profilu"/>
            </View>
            <View style={profilePageStyle.bodyContainer}>
                <View style={profilePageStyle.accountDataContainer}>
                    <AccountData/>
                </View>
                <View style={profilePageStyle.logOutButtonContainer}>
                    <ButtonLogOut navigation={navigation}/>
                </View>
            </View>
            <View style={profilePageStyle.footerNavigationContainer}>
                <NavigationBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ProfilePage;
