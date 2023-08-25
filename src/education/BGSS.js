import React, { useState } from 'react';
import { Text, View, Button ,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';


const BGSS = () => { 
  const navigation = useNavigation();
  const BackToHomeButton = () => {
    navigation.navigate('Landing Page');
  };
  const styles = {
    wholepg: tw.style("bg-indigo-200 flex-1"),
    pagecen: tw.style("m-2"),
    header: tw.style("m-2 font-bold"),
    aalist: tw.style('border-t mt-3 pt-3'),
  };

  return(
    <SafeAreaView style = {styles.wholepg}>
      <View style = {styles.pagecen}> 

      <Text style = {styles.header}>
        Institution: Bedok Green Secondary School {"\n"}
        Graduated: Apr 2020 {"\n"}
        Course of Study: N/A 
        </Text>

        <View style={styles.aalist}>
          <Text>- Completed Coursework: Exercise And Sport Science, {"\n"}  2019 - 2020 </Text>
          <Text>- Completed Coursework: Design and Technology, 2018</Text>
          <Text>- Completed Coursework: Food and Consumer Education, 2017{"\n"}</Text>

          <Text>Achievements and Activities:</Text>
          <Text>- Member of Basketball, 2017 - 2020</Text>
          <Text>- Recipient of Edusave Good Progress Award, 2019</Text>
          <Text>- Recipient of Class IT Leader, 2019</Text>
          <Text>- Recipient of Most Improved Student in Term 3, 2018</Text>
          <Text>- Recipient of Class IT Leader, 2017{"\n"}</Text>

        </View>

        <Button 
          title = "Back to Home"
          onPress = {BackToHomeButton}/>        
       
    </View>
  </SafeAreaView>
  )
};

export default BGSS;