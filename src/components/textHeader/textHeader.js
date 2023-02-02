import { View, Text, StyleSheet } from "react-native";
import textHeaderStyle from "./style/textHeaderStyle";

const TextHeader = ({ title, subtitle, sizeTitle, sizeSubTitle, titleStyle, subTitleStyle }) => {
  return (
    <View>
        <Text style={[textHeaderStyle.title, {fontSize: sizeTitle}, titleStyle]}>{title}</Text>
        <Text style={[textHeaderStyle.subtitle, {fontSize: sizeSubTitle}, subTitleStyle]}>{subtitle}</Text>
    </View>
  );
}

export default TextHeader;