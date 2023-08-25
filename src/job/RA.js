import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const RA = () => {
  const navigation = useNavigation();

  const BackToHomeButton = () => {
    navigation.navigate('Landing Page');
  };

  const styles = {
    wholePage: tw.style('bg-blue-200 flex-1'),
    pageCenter: tw.style('m-2'),
    header: tw.style('m-2 font-bold'),
    listContainer: tw.style('border-t mt-3 pt-3'),
  };

  return (
    <SafeAreaView style={styles.wholePage}>
      <View style={styles.pageCenter}>
        <Text style={styles.header}>
          Company: Challenger Technologies Limited {"\n"}
          Job Role: Retail Associate{"\n"}
          Worked Duration: Jan 2021 - Mar 2021 {"\n"}
          Work Type: Part - Time {"\n"}
          Location: Tampines Mall{"\n"}
          Type: Sales
        </Text>

        <View style={styles.listContainer}>
          <Text>Description:</Text>
          <Text>
          Working as a Retail Associate allowed me to expand my knowledge of the products and brands offered in the shop. This experience provided me with a platform for self-improvement and helped me to better assist customers in selecting the right items. It also gave me the opportunity to learn more about the products and compare them, which helped me to provide customers with the information they needed to make informed decisions.{"\n"}
          </Text>
        </View>

        <Button
          title="Back to Home"
          onPress={BackToHomeButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default RA;
