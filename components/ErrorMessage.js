import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <View style={globalStyles.errorContainer}>
      <Text style={globalStyles.errorText}>{message}</Text>
    </View>
  );
}