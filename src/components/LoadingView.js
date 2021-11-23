import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="medium" color="#2196F3" />
    </View>
  );
};

export default LoadingView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
