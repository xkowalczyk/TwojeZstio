import { TouchableOpacity, View } from "react-native";

import auth from '@react-native-firebase/auth';

import ParagraphText from "../textParagraph/textParagraph";


export const ButtonLogOut = ({navigation}) => {

    async function logOut()
    {
        try {
            await auth().signOut();
            navigation.navigate('Login');
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <View>
            <TouchableOpacity onPress={() => {
                logOut();
            }}>
                <ParagraphText text="Wyloguj" style={{fontSize: 16}}/>
            </TouchableOpacity>
        </View>
    );
}