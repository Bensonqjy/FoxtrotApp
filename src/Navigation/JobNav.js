import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Job = () => {
    const navigation = useNavigation();
    const [SmisCollapsed, setSmIsCollapsed] = useState(true);
    const [AraisCollapsed, setAraIsCollapsed] = useState(true);
    const [RaisCollapsed, setRaIsCollapsed] = useState(true);
    const AratoggleCollapse = () => {
        setAraIsCollapsed(!AraisCollapsed);
      };
    const RatoggleCollapse = () => {
    setRaIsCollapsed(!RaisCollapsed);
    };
    const SmtoggleCollapse = () => {
        setSmIsCollapsed(!SmisCollapsed);
        };
    const styles = {
        dispcen: tw.style('items-center justify-center'),
        header1: tw.style('font-bold text-xl rounded text-center underline'),
        headerButton: tw.style('font-3xl text-center rounded w-100 box-border flex items-center justify-center'),
        headerText: tw.style('font-bold text-xl rounded text-center '),
        collapsibleContent: tw.style('h-54 bg-blue-200 rounded-b '),
        listItem: tw.style('font-bold m-2 text-xs'),
      };
  
    return (
      <SafeAreaView>
        <View style={tw.style('p-4')}>
            
          <Text style={styles.header1}>
            Benson Quah Professional Experience
          </Text>
  
          <View style={styles.dispcen}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={SmtoggleCollapse}
            >
            <Text style={styles.headerText}>Intern - SSMC Mobile App Overhaul Project</Text>
            </TouchableOpacity>
            {/* Description for SSMC Mobile Application Overhaul  */}
            <Collapsible collapsed={SmisCollapsed} style={styles.collapsibleContent}>
              <Text style={styles.listItem}>
                Company: Systems on Silicon Manufacturing Company Pte Ltd {"\n"}
                Worked Duration: Oct 2023 - Feb 2024 {"\n"}
                Work Type: Internship {"\n"}
                Location: 70 Pasir Ris Industrial Drive 1, Singapore 519527 {"\n"}
                Type: IT {"\n"}
              </Text>
              <Text style={styles.listItem}>
                Description: As an Intern , I ensure that I fufill the requirement set by the different department to have those function in the application.
              </Text>
            </Collapsible>

            <TouchableOpacity
              style={styles.headerButton}
              onPress={AratoggleCollapse}
            >
            <Text style={styles.headerText}>Apple Retail Associate - Singapore</Text>
            </TouchableOpacity>
            {/* Description for Apple Retail Associate */}
            <Collapsible collapsed={AraisCollapsed} style={styles.collapsibleContent}>
              <Text style={styles.listItem}>
                Company: Challenger Technologies Limited {"\n"}
                Worked Duration: Mar 2021 - Mar 2023 {"\n"}
                Work Type: Part-Time {"\n"}
                Location: Tampines Mall {"\n"}
                Type: Sales {"\n"}
              </Text>
              <Text style={styles.listItem}>
                Description: As an Apple Retail Associate, I had the opportunity to assist customers in making informed decisions about which products would best meet their needs by sharing my knowledge and expertise with them.
              </Text>
            </Collapsible>
           
            <TouchableOpacity
              style={styles.headerButton}
              onPress={RatoggleCollapse}
            >
            <Text style={styles.headerText}>Retail Associate - Singapore</Text>
            </TouchableOpacity>
            {/* Description for Retail Associate */}
            <Collapsible collapsed={RaisCollapsed} style={styles.collapsibleContent}>
              <Text style={styles.listItem}>
                Company: Challenger Technologies Limited {"\n"}
                Job Role: Retail Associate{"\n"}
                Worked Duration: Jan 2021 - Mar 2021 {"\n"}
                Work Type: Part-Time {"\n"}
                Location: Tampines Mall {"\n"}
                Type: Sales {"\n"}
              </Text>
              <Text style={styles.listItem}>
                Description: Description: Working as a Retail Associate expanded my product knowledge and improved my customer assistance skills. This role provided a platform for self-improvement and helped me guide customers towards suitable choices.
              </Text>
            </Collapsible>


        
            
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Job;
  