import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const ARA = () => {
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
          Job Role: Apple Retail Associate{"\n"}
          Worked Duration: Mar 2021 - Mar 2023 {"\n"}
          Work Type: Part - Time {"\n"}
          Location: Tampines Mall{"\n"}
          Type: Sales
        </Text>

        <View style={styles.listContainer}>
          <Text>Description:</Text>
          <Text>
            As an Apple Retail Associate, I had the opportunity to assist customers in making informed decisions about which products would best meet their needs by sharing my knowledge and expertise with them.{"\n"}
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

export default ARA;
