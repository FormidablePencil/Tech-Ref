import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from './routes/drawer';

export default function App() {
  return (
    <Drawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
