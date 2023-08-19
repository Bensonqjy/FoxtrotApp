import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Home = () => { 
  const navigation = useNavigation();
  const LogoutButton = () => {
    navigation.navigate('Login');
  };
  const MCButton = () => {
    navigation.navigate('Apply / Submission of MC');
  };

  const LOAButton = () => {
    navigation.navigate('Apply / Submission of LOA');
  };

  const ProfileButton = () => {
    navigation.navigate('Profile');
  };

  return(
    <View> 
      
      <Button 
        style = {tw.style(' pt-6 bg-red-100')}
        title = "Apply / Submission of LOA"
        onPress = {LOAButton}/> 
        
        <Button 
        title = "Apply / Submission of MC"
        onPress = {MCButton}/>      

        <Button 
        title = "Logout"
        onPress = {LogoutButton}/>        

        <Button 
        title = "Profile"
        onPress = {ProfileButton}/>        
        
        
       
    </View>
  )
};

export default Home;