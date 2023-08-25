import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button , Image, TouchableOpacity } from 'react-native';
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

  const EducButton = () => {
    navigation.navigate('Education Background');
  };

  const JobButton = () => {
    navigation.navigate('Job Experience');
  };

  const ProfileButton = () => {
    navigation.navigate('Socials');
  };

  return(
    <View>

      <Image
      style={tw.style("w-50 h-50 self-center")} // required Dimensions and styling of Image
      source={require('./Me.jpg')}/>

      <Text>Hi there</Text>
      
      <TouchableOpacity
        style = {tw.style('pt-2 rounded bg-green-100 w-30 border py-1 ')} 
        onPress = {EducButton}
      >
        <Text style = {tw.style("text-center")}>Education</Text>
      </TouchableOpacity>


      <Button 
        style = {tw.style(' pt-6 bg-red-100')}
        title = "Professional Experience"
        onPress = {JobButton}/> 
        
        
     

        <Button 
        title = "Logout"
        onPress = {LogoutButton}/>        



        <Button 
        title = "Contact Me"
        onPress = {ProfileButton}/>         
        
        <Button 
        title = "Setting"
        onPress = {ProfileButton}/>     
        <Button 
        title = "Apply / Submission of MC"
        onPress = {MCButton}/>  


        <Text>Announcement</Text>  
        
        
       
    </View>
  )
};

export default Home;