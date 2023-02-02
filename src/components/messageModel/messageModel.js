import { View, Text, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import { messageModelStyle } from "./style/messageModelStyle";
import ParagraphText from "../textParagraph/textParagraph";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ShareAction } from "../shareAction/shareAction";

export const MessageModel = ({ data }) => {
    const [stateBackgroundColor, setBackgroundColor] = useState(messageModelStyle.container.backgroundColor);
    const [isVisible, setIsVisible] = useState(false);
    const [titleText, setTitleText] = useState(data.title + " - " + data.date);
    const [titleStyle, setTitleStyle] = useState(messageModelStyle.titleText);

    checkIsset = async () => {
        let item = await AsyncStorage.getItem(data.id);
        if(item == 'true'){
            setBackgroundColor("#fa6b6b");
        }
    }

    checkIsset();

    return (
        <View style={[messageModelStyle.container, {backgroundColor: stateBackgroundColor}]}>
            <TouchableOpacity onPress={() => {
                setIsVisible(!isVisible);
                AsyncStorage.setItem(data.id, 'true');
                if(!isVisible) {
                    setTitleText(data.title);
                    setTitleStyle(messageModelStyle.titleTextWithMessage);
                } else {
                    setTitleText(data.title + " - " + data.date);
                    setTitleStyle(messageModelStyle.titleText); 
                }
                }}>
                <ParagraphText text={titleText} style={titleStyle}/>

        {isVisible ? (
            <View>
                <View style={messageModelStyle.messageContainer}>
                    <ParagraphText text={data.message} style={messageModelStyle.messageContainer}/>
                </View>
                <ParagraphText text={data.date} style={[{marginTop: '5%', justifyContents:'left', fontWeight: 'bold'}]}/>
                <ParagraphText text={"Autor: " + data.sender} style={{marginTop: '1%', justifyContents:'left', fontWeight: 'bold'}}/>
                <ShareAction shareData={"Tytuł: " + data.title + " | treść wiadomości: " + data.message} text="Udostępij wiadomość"/>
            </View>
        ) : null}
            </TouchableOpacity>
        </View>
    );
}