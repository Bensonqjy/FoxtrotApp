import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './authentication/login';
import ContactPage from './src/information/contact';
import LandingPage from './src/Navigation/HomeNav';
import MCPage from './src/others/mcPage';
import Education from './src/Navigation/EduNav';
import Setting from './src/information/about';
import TP from './src/education/TP';
import BGSS from './src/education/BGSS';
import Job from './src/Navigation/JobNav';
import ARA from './src/job/ARA';
import RA from './src/job/RA';


const Stack = createStackNavigator();

export const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Contact Us" component={ContactPage} />
      <Stack.Screen name="Landing Page" component={LandingPage} />
      

      <Stack.Screen name="Job Experience" component={Job} />
      <Stack.Screen name="ARA" component={ARA} />
      <Stack.Screen name="RA" component={RA} /> 

      <Stack.Screen name="Education Background" component={Education}/>
      <Stack.Screen name="Temasek Polytechnic" component={TP}  />
      <Stack.Screen name="BGSS" component={BGSS} />      
      
      <Stack.Screen name="Socials" component={Setting} />
      <Stack.Screen name="Apply / Submission of MC" component={MCPage} />
    </Stack.Navigator>
  );
};
