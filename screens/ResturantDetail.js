import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import MenuItems from '../ResturantDetail/MenuItems';
import ResturantDetailHeader from '../ResturantDetail/ResturantDetailHeader';
import CommentsComponent from '../components/CommentsComponent';

export default function ResturantDetail({route, navigation}) {
  return (
    <View>
      <ScrollView>
        <ResturantDetailHeader route={route} />
        <Divider width={1} style={styles.divider} />
        <CommentsComponent />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  divider: {
    margin: 5
  }
})