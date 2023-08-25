import React from 'react';
import { Text, View, Button, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'twrnc';


const TP = () => { 
  const navigation = useNavigation();
  const BackToHomeButton = () => {
    navigation.navigate('Landing Page');
  };
  const styles = {
    pagecen: tw.style("m-2"),
    header: tw.style("m-2 font-bold"),
    cclist: tw.style("border-t mt-3 pt-3"),
  }

  return(
    <SafeAreaView>
      <View style = {styles.pagecen}> 
      <Text style = {styles.header}>
        Institution: Temasek Polytechnic {"\n"}
        Graduated: Apr 2024 {"\n"}
        Course of Study: Computer Engineering {"\n"}
        GPA: 1.0 (on a scale of 4.0)
        </Text>
        <View style = {styles.cclist}>
          <Text>- Completed Coursework: Major Project, 2023 {"\n" }
          (Recipient of NUS BES Design Category Bronze Award)</Text>
          <Text>- Completed Coursework: Artificial Intelligence and Machine Learning, 2023 (Grade: A)</Text>
          <Text>- Completed Coursework: Advanced Skill Practice, 2023</Text>
          <Text>- Completed Coursework: Full Stack Development, 2023</Text>
          <Text>- Completed Coursework: Intelligent Automation, 2023</Text>
          <Text>- Completed Coursework: Object-oriented Programming, 2022</Text>
          <Text>- Completed Coursework: Microcontroller Application, 2022</Text>
          <Text>- Completed Coursework: Internet Of Things Project, 2023{"\n"}</Text>
          
          <Text>Achievements and Activities:</Text>
          <Text>  
          - Member of Computer Engineering Club, 2023 to 2024 {"\n"}</Text>
          
        </View>

        {/* <Text>Reflection: </Text>
        <Text>
          I have learned a lot about the field of computer engineering through this course. I am blessed to meet with individuals from different industries such as biomedical where we exchange our knowledge to create both oxygen as well as Sleep report page for our Client (SleepEasy Centres )
          </Text> */}

        <Button 
          title = "Back to Home"
          onPress = {BackToHomeButton}/>        
    </View>
  </SafeAreaView>
  )
};
export default TP;