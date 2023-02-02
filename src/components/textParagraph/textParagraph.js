import { Text } from "react-native";

const ParagraphText = (props) => {
    return(
        <Text style={[props.style, {fontFamily: 'RobotoCondensed-Regular', color: 'black'}]}>
            {props.text}
        </Text>
    );
}

export default ParagraphText;