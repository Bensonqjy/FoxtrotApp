import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button ,TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import tw from 'twrnc';




const MC = () => { 
  const navigation = useNavigation();
  const BackToHomeButton = () => {
    navigation.navigate('Landing Page');
    console.log('Button pressed!');
  };

  const date = new Date();
  const n = date.toDateString();
  const time = date.toLocaleDateString();

  const [selected, setSelected] = React.useState("");
  const reasons = ["Medical Leave" , "Hospitalisation Leave"]

  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return(
    <SafeAreaView>
      <View style = {tw.style("bg-white")}> 

          <Text style = {tw.style(' font-bold text-l px-2')}>Contact No*</Text>
          <TextInput 
          style = {tw.style('bg-blue-100 w-100  px-2 py-1 rounded-xl m-1')}
          placeholder="Enter Contact Number" 
          maxLength={8}/>

          <Text style = {tw.style("text-lg")}>Reason Of Absence</Text>
          <SelectList 
            style = {tw.style('')}
            setSelected={(val) => setSelected(val)} 
            data={reasons} 
            save="value"
          />  
      
          <Text>From Date</Text>
        

          <Text>To Date</Text>


          <Text style = {tw.style("font-bold text-l px-2")}>MC Number* </Text>
          <TextInput
          style = {tw.style('bg-blue-100 rounded-xl py-1 px-2 w-100 m-1 ')}
          placeholder='MC No'/>


          <Text style = {tw.style('font-bold text-l px-2 ')}>Clinic Name*</Text>
          <TextInput 
          style = {tw.style('rounded-xl py-1 px-2 m-1 bg-blue-100 w-100')}
          placeholder='Input here'/>


          <Text style = {tw.style ('text-l font-bold px-2')}>Remarks</Text>
          <TextInput
          style = {tw.style('text-md bg-blue-100  rounded-xl px-2 py-1 w-100 m-1')}
          multiline = {true}
          placeholder='Max 1000 character'
          maxLength={1000}
          />         

        <Button 
          title = "Submit"
          onPress = {BackToHomeButton}/>        
       
    </View>
  </SafeAreaView>
  )
};

export default MC;