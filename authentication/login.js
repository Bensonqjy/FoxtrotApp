import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';


const Login = ({}) => { 
  const navigation = useNavigation();

  const HelplineButton = () => {
    navigation.navigate('Contact Us');
  };

  const LandingButton = () => {
    navigation.navigate('Landing Page');
  };

  return(
    <SafeAreaView style = {tw.style('bg-white flex-1 ')}>
      
      <View style = {tw.style('py-30 rounded-xl')}>
        

        {/* <Image
          style={tw.style("w-80 h-30 px-50 py-20 m-2")} 
          source={require('./SSMC-logo.png')}
        /> */}

        <Text>Thank You For being part of Benson's Life journey</Text>

        <Text style = {tw.style('py-1 left-2 font-bold ')}>UserName:</Text>
        <TextInput
        style = {tw.style('rounded-xl m-4 py-1 bg-pink-300 px-2')}
        secureTextEntry = {true}
        placeholder='Enter your UserName'
        />

        <Text style = {tw.style('py-1 left-2 font-bold ')}>Password:</Text>
        <TextInput
        style = {tw.style("rounded-xl m-4 py-1 bg-pink-300 px-2 ")}
        secureTextEntry = {true}
        placeholder='Enter your Password'
        />


        <Button title = "Login"
        onPress = {LandingButton}/>

        <Text
        style = {tw.style('text-center text-red-600 text-lg ')}
        onPress = {HelplineButton}
        >Need Help?</Text>

        <Text
        style = {tw.style('text-center text-xs pt-50')}
        >©2023-FoxtrotOrg Company. All rights reserved.</Text>
       </View>
    </SafeAreaView>
  )
};
export default Login;
