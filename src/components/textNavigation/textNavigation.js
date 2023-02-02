import { TouchableOpacity, View, Text } from "react-native";
import ParagraphText from "../textParagraph/textParagraph";
//import { textNavigationStyle } from "./style/textnavigationstyle";

export const TextNavigation = (props) => {
    return(
        <View style={[props.styleContainer, {}]}>
            <TouchableOpacity onPress={() => {props.onPressNavigation()}}>
                <ParagraphText text={props.text} style={[props.styleText, {textDecorationLine: 'underline',}]}/>
            </TouchableOpacity>
        </View>
    );
}