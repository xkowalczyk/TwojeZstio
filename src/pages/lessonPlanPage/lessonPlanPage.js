import React from "react";
import {WebView} from "react-native-webview";

export const LessonPlanPage = () => {
    return(
        <WebView source={{uri: 'https://www.zstio.pl/plan-lekcji'}}/>
    );
}