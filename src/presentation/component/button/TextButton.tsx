import { useTheme } from '@hooks';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';

export interface TextButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
};

export const TextButton: React.FC<TextButtonProps> = (props) => {
  const { title, onPress, color } = props;
  return <TouchableOpacity onPress={onPress}>
    <View style={StyleSheet.flatten([styles.container])}>
    <Text style={{
      color: useTheme().colorScheme.secondary,
      fontWeight: '600'
    }}>{Platform.OS == 'android' ? title.toUpperCase() : title}</Text>
  </View>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {},
  
});
