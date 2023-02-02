import { View, Image, TouchableOpacity } from "react-native";
import { navigationBarStyle } from "./style/navigationBarStyle";

export const NavigationBar = ({navigation}) => {
    return(
        <View style={navigationBarStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Surveys')} style={navigationBarStyle.imageContainer}> 
                <Image source={require('../../assets/images/completed-task.png')} style={[navigationBarStyle.navigationImage, {marginRight: '10%'}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={navigationBarStyle.imageContainer}>
                <Image source={require('../../assets/images/schedule.png')} style={[navigationBarStyle.navigationImage, {marginLeft: '0%'}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={navigationBarStyle.imageContainer}>
                <Image source={require('../../assets/images/profile.png')} style={[navigationBarStyle.navigationImage, {marginLeft: '10%'}]}/>
            </TouchableOpacity>
        </View>
    );
};
/*
*/