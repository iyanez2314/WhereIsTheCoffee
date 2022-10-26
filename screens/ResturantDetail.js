import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ResturantDetailHeader from '../ResturantDetail/ResturantDetailHeader';
import { Divider } from 'react-native-elements';

export default function ResturantDetail({route, navigation}) {
  return (
    <View>
      <ResturantDetailHeader route={route} />
      <Divider width={1} style={styles.divider} />
    </View>
  )
};

const styles = StyleSheet.create({
  divider: {
    margin: 5
  }
})