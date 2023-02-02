import { View, ActivityIndicator} from "react-native";
import { useState, useEffect } from "react";

import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/app-check";
import auth from '@react-native-firebase/auth';

import { mainPageStyle } from "./style/mainPageStyle";

import TextHeader from "../../components/textHeader/textHeader";
import ParagraphText from "../../components/textParagraph/textParagraph";
import { ListMessage } from "../../components/listMessage/listMessage";
import { NavigationBar } from "../../components/navigationBar/navigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";



const MainPage = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [messageData, setMessageData] = useState([]);
    useEffect(() => {
        if(auth().currentUser == null){
            navigation.navigate('Login');
        }

        const subscriber = firestore()
          .collection('Message')
          .onSnapshot(querySnapshot => {
            const message = [];
      
            querySnapshot.forEach(documentSnapshot => {
              message.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              }); 
            });
      
            setMessageData(message);
            setLoading(false);
          });
              return () => subscriber(); 
      }, []);
      
        return (
            <View style={mainPageStyle.container}>
                <View style={mainPageStyle.headerContainer}>
                    <TextHeader title="Twoje ZSTiO" sizeTitle={parseInt("20")} subtitle="Wiadomości"/>
                </View>
                <View style={mainPageStyle.bodyContainer}>
                    <View style={mainPageStyle.messageContainer}>
                    {loading ? (
                        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <ActivityIndicator color={'red'} size="large"/>
                            <ParagraphText text="Ładowanie wiadomości..." style={{textAlign: 'center', fontSize: 17}}/>
                        </View>
                    ) : null}
                    {!loading ? (
                        <ListMessage data={messageData}/>
                    ) : null
                    }    
                    </View>
                </View>
                <View style={mainPageStyle.footerNavigationContainer}>
                    <NavigationBar navigation={navigation}/>
                </View>
                
            </View>
        );
}
/*                 <Button title="s" onPress={() => {props.n('login')}}/>
*/
export default MainPage;