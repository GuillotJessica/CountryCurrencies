import React from 'react';
import { StatusBar } from 'react-native';
import {SafeAreaView, StyleSheet } from 'react-native';
import AppContent from './src'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppContent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
