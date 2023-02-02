import { FlatList, View} from "react-native";
import { SurveysModel } from "../surveysModel/surveysModel";
export const ListSurveys= ({ data }) => {
  return (
    <View>
        <FlatList
            data={data}
            renderItem={({item}) =><View><SurveysModel data={item}/></View>}
        />
    </View>
  );
}