/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';

AppRegistry.registerComponent(appName, () => App);


OneSignal.setAppId("a4507462-8e88-4249-838a-ed146e0e1cd2");
OneSignal.promptForPushNotificationsWithUserResponse();

OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  notificationReceivedEvent.complete(notification);
});

OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});