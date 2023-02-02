import { View,  ActivityIndicator  } from "react-native";

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { surveysPageStyle } from "./style/surveysPageStyle";

import { ListSurveys } from "../../components/listSurveys/listSurveys";
import TextHeader from "../../components/textHeader/textHeader";
import ParagraphText from "../../components/textParagraph/textParagraph";
import { NavigationBar } from "../../components/navigationBar/navigationBar";
import { useEffect, useState } from "react";

const SurveysPage = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [surveysData, setSurveysData] = useState([]);

    useEffect(() => {
        if(auth().currentUser == null){
            navigation.navigate('Login');
        }

        const subscriber = firestore()
          .collection('Surveys')
          .onSnapshot(querySnapshot => {
            const surveys = [];
      
            querySnapshot.forEach(documentSnapshot => {
                surveys.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              }); 
            });
      
            setSurveysData(surveys);
            setLoading(false);
          });
          console.log(surveysData);
              return () => subscriber(); 

    }, []);

    return(
        <View style={surveysPageStyle.container}>
            <View style={surveysPageStyle.headerContainer}>
                <TextHeader title="Twoje ZSTiO" sizeTitle={parseInt("20")} subtitle="Ankiety"/>
            </View>
            <View style={surveysPageStyle.bodyContainer}>
                <View style={surveysPageStyle.surveysContainer}>
                    {loading ? (
                        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <ActivityIndicator color={'red'} size="large"/>
                            <ParagraphText text="Ładowanie ankiet..." style={{textAlign: 'center', fontSize: 17}}/>
                        </View>
                    ) : null}
                    {!loading ? (
                    <ListSurveys data={surveysData}/>
                ) : null
                    }    
                </View>
            </View>
            <View style={surveysPageStyle.footerNavigationContainer}>
                <NavigationBar navigation={navigation}/>
            </View>
        </View>
    );
};

export default SurveysPage;