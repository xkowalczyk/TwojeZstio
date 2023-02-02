import { useEffect, useState } from "react"
import { Button, FlatList, View, Text, Alert } from "react-native"


import firestore from '@react-native-firebase/firestore';

import ParagraphText from "../textParagraph/textParagraph"
import { surveyModelStyle } from "./style/surveyModelStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SurveysModel = ({ data }) => {

    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [buttonBackground, setButtonBackground] = useState('red');
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
    async function checkIfAnswered(){
        try {
            const value = await AsyncStorage.getItem(data.id)
            if(value == 'true') {
                setButtonBackground('grey');
                setButtonIsDisabled(true);
            }
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const subscriber = firestore()
          .collection('Surveys').doc(data.id).collection('options')
          .onSnapshot(querySnapshot => {
            const options = [];
      
            querySnapshot.forEach(documentSnapshot => {
                options.push({
                ...documentSnapshot.data(),
              }); 
            });
            console.log(Object.entries(options[0]));
            setOptions(options);
            setLoading(false);
            checkIfAnswered();
          });
          //console.log(Object.values(options[0]));
          return () => subscriber();
    }, []);

    const optionConfirm = (option) =>
    Alert.alert(
      "Twoje ZSTiO - Ankieta",
      "Czy na pewno chcesz wybrać tą odpowiedź?",
      [
        {
          text: "Anuluj",
          style: "cancel"
        },
        { text: "Tak", onPress: () => sendOption(option) }
      ]
    );

    function sendOption(option){
        console.log(option);
        var updateObj = {};
        updateObj[option] = firestore.FieldValue.increment(1),

        firestore()
        .collection('Surveys').doc(data.id).collection('response').doc('1').update(updateObj)
        .then(() => {
            console.log('User updated!');
        }); 
        AsyncStorage.setItem(data.id, 'true');
        checkIfAnswered();
    }

    return(
        <View>
            <View style={surveyModelStyle.container}>
            <ParagraphText text={data.question} style={{color: 'black', alignSelf: 'center', marginBottom: '2%', fontSize: 15, fontWeight: 'bold'}}/>
                {!loading ? (
                    <FlatList data={Object.entries(options[0])}
                    renderItem={(option) =>
                        <View style={surveyModelStyle.buttonContainer}>
                            <Button title={option.item[1]} 
                            onPress={() => optionConfirm(option.item[0])}
                            color = {buttonBackground}
                            disabled = {buttonIsDisabled}
                            />
                        </View>
                    }
                    />
                ) : null}
            </View>
        </View>
    )
}