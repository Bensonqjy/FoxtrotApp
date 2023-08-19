import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button , Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const AboutMe = ({ }) => { 
  const navigation = useNavigation();
  const BackToHomeButton = () => {
    navigation.navigate('Login');
  };

  return(
    <View>
        <Image
     
          style={tw.style("w-100 h-100")} // required Dimensions and styling of Image
          source={require('../../src/images/p.png')}
        />


      <Text style = {tw.style('text-xl font-bold ')}>UserName</Text>
      <TextInput
      placeholder='user1' />

      <TouchableOpacity
        style = {tw.style ("font-3xl text-center rounded w-100  box-border flex items-center justify-center ")}
        onPress = {BackToHomeButton}
        >
          <Text style = {tw.style ('text-center bg-red-100 rounded  ')}>Edit Profile</Text>
      </TouchableOpacity>


        {/* <Button 
        title = "Back To Login"
        />         */}

    </View>
  )
};

export default AboutMe;
