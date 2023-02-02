import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './pages/mainPage/mainPage';
import RegisterPage from './pages/registerPage/registerPage';
import LoginPage from './pages/loginPage/loginPage';
import ProfilePage from './pages/profilePage/profilePage';
import SurveysPage from './pages/surveysPage/surveysPage';
const Stack = createNativeStackNavigator();

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={MainPage}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
        />
        <Stack.Screen
          name="Surveys"
          component={SurveysPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};