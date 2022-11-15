import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet,  TouchableOpacity, Tpext, View, Switch, ScrollView } from 'react-native';
import MyTabs from './Src/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

