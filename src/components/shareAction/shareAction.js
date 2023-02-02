import { TouchableOpacity, View, Share, Image, Button } from "react-native";
import ParagraphText from "../textParagraph/textParagraph";
import { shareActionStyle } from "./style/shareActionStyle";

export const ShareAction = (props) => {
    async function shareData(){
        try {
            const result = await Share.share({
              message:
                props.shareData,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
              } else {
              }
            } else if (result.action === Share.dismissedAction) {
            }
          } catch (error) {
          }
    }

    return (
        <View style={shareActionStyle.container}>
            <TouchableOpacity style={shareActionStyle.shareButton} onPress={() => {
                shareData();
            }}>
                <ParagraphText text={props.text} style={shareActionStyle.shareText}/>
                <Image source={require('../../assets/images/share.png')} style={shareActionStyle.shareImage}/>
            </TouchableOpacity>
        </View>
    );
}
/*
<TouchableOpacity onPress={() => {
                shareData();
            }}>
                <ParagraphText text={props.text}/>
                <Image source={require('../../assets/images/share.png')}/>
            </TouchableOpacity>
*/