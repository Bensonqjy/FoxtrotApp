import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use appropriate icon libraries
import tw from 'twrnc';

const ContactMe = () => {
  const handleEmail = () => {
    Linking.openURL('mailto:benson.quah.sg@gmail.com');
  };

  const handleLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/your-profile');
  };

  const handleTwitter = () => {
    Linking.openURL('https://twitter.com/yourhandle');
  };

  // Add similar functions for other social media platforms

  return (
    <View>
      <Text>Contact Me:</Text>
      
      {/* Email */}
      <TouchableOpacity onPress={handleEmail}>
        <Ionicons name="mail-outline" size={24} />
        <Text>Email</Text>
      </TouchableOpacity>
      
      {/* LinkedIn */}
      <TouchableOpacity onPress={handleLinkedIn}>
        <Ionicons name="logo-linkedin" size={24} />
        <Text>LinkedIn</Text>
      </TouchableOpacity>

      {/* Twitter */}
      <TouchableOpacity onPress={handleTwitter}>
        <Ionicons name="logo-twitter" size={24} />
        <Text>Twitter</Text>
      </TouchableOpacity>

      {/* Add similar TouchableOpacity components for other social media platforms */}
    </View>
  );
};

export default ContactMe;
