import React, { useEffect, useState } from 'react';
import { Permission } from 'react-native-permissions';


import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import RegisterPage from './pages/registerPage/registerPage';
import LoginPage from './pages/loginPage/loginPage';
import MainPage from './pages/mainPage/mainPage';
import SurveysPage from './pages/surveysPage/surveysPage';
import { LessonPlanPage } from './pages/lessonPlanPage/lessonPlanPage';

import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationRoot } from './NavigationRoot';
const Stack = createNativeStackNavigator();


const App: () => Node = () => {




  return(
  <NavigationRoot/>
  )

};
    


export default App;
