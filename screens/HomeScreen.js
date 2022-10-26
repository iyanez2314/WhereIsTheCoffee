import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ResturantItems from '../components/ResturantItems';

export default function HomeScreen() {

  const [] = useState('San Antonio');


  return (
    <>
    <SafeAreaView style={{backgroundColor: '#FFF8EA'}}>
    <View style={styles.MainView}>
      <SearchBar />
    </View> 
    </SafeAreaView>
      <ScrollView>
        <ResturantItems/>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  MainView: {
    padding: 15,
  }
})