import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './authentication/login'; // Your login page component
import ContactPage from './src/information/contact'; // Your contact page component
import LandingPage from './src/dashboard/home';
import MCPage from './src/submission/mcPage';
import AboutMe from './src/information/aboutme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Contact Us" component={ContactPage} />
        <Stack.Screen name = "Landing Page" component = {LandingPage} />
        <Stack.Screen name = "Apply / Submission of MC" component = {MCPage} />
        <Stack.Screen name = "Profile" component={AboutMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
