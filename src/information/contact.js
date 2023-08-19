import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Helpline = ({ }) => { 
  const navigation = useNavigation();
  const BackToHomeButton = () => {
    navigation.navigate('Login');
  };

  return(
    <View>
        <Text style = {tw.style('font-bold text-center text-xl')}>Require Assistance ?</Text>

        <Text style = {tw.style("text-base pt-2 m-5")}>
          Working Hours: Mon-Fri 9am-6pm  {"\n"}
          (excluding Public Holiday) {"\n"}
         
         
          Contact us at 9876123{"\n"}
          or{"\n"}
          Drop us an email: helpdesk@gmail.com
        </Text>

        
        <Button 
        style = {tw.style('pt-2')}
        title = "Back To Login"
        onPress = {BackToHomeButton}/>        

    </View>
  )
};

export default Helpline;
