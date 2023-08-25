import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Education = () => {
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const TPButton = () => {
    navigation.navigate('Temasek Polytechnic');
  };
  const BGSSButton = () => {
    navigation.navigate('BGSS');
  };

  const styles = {
    container: tw.style('bg-red-200 rounded h-8'),
    headerButton: tw.style('text-center rounded w-100 flex items-center justify-center'),
    headerText: tw.style('font-bold text-xl rounded'),
    collapsibleContent: tw.style('h-85 bg-blue-200 rounded-b '),
    listItem: tw.style('font-bold m-2 text-xs'),
  };

  return (
    <SafeAreaView style={tw.style('flex-1')}>
      <View style={tw.style('p-4')}>
        <Text style={tw.style('text-center font-bold')}>
          Benson Quah Graduated from the Institution below:
        </Text>

        <Text>Click the Respoective instiutuin to learn more</Text>
        <View style={tw.style('flex items-center justify-center')}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={TPButton}
          >
            <Text style={styles.headerText}>Temasek Polytechnic - Singapore</Text>
          </TouchableOpacity>
          <View style={tw.style('flex items-center justify-center mt-2')}>
            <Text style={tw.style('text-3xl')}>↓</Text>
          </View>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={BGSSButton}
          >
            <Text style={styles.headerText}>Bedok Green Secondary School - Singapore</Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Education;
