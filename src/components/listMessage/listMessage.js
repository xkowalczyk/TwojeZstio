import { FlatList, View } from "react-native";
import { MessageModel } from "../messageModel/messageModel";

export const ListMessage = ({ data }) => {
  return (
    <View>
        <FlatList
            data={data}
            renderItem={({item}) =><View><MessageModel data={item}/></View>}
        />
    </View>
  );
}