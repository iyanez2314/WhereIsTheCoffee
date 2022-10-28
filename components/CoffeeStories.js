import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';


export const FakeUserData = [
    {
        userName: 'CoffeeLover1',
        userImage: require('../assets/FakeUserImages.js/image0.jpeg')
    },
    {
        userName: 'cozy_codess',
        userImage: require('../assets/FakeUserImages.js/image1.jpeg')
    },
    {
        userName: 'I_Love_Coffee',
        userImage: require('../assets/FakeUserImages.js/image2.jpeg')
    },
    {
        userName: 'The_bestCoffeeMaker',
        userImage: require('../assets/FakeUserImages.js/image3.jpeg')
    },
    {
        userName: 'code_andCoffee',
        userImage: require('../assets/FakeUserImages.js/image2.jpeg')
    },
    {
        userName: 'coderCoffee',
        userImage: require('../assets/FakeUserImages.js/image1.jpeg')
    },
    {
        userName: 'thecoffeeperson',
        userImage: require('../assets/FakeUserImages.js/image0.jpeg')
    },
]

export default function CoffeeStories() {
  return (
    <View style={styles.mainView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
          FakeUserData.map((user, index) => (
              <View key={index} style={styles.mappedView}>
                    <Image source={user.userImage} style={styles.imageStyle}/>
                    <Text style={styles.textStyle}>{user.userName}</Text>
              </View>
          ))
      }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    mappedView: {
        alignItems: 'center',
        marginRight: 30,
    },
    mainView: {
        marginTop: 8,
        backgroundColor: '#FFF8EA',
        paddingVertical: 10,
        paddingLeft: 10
    },
    imageStyle: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#9E7676'
    },
    textStyle: {
        fontSize: 13,
        fontWeight: '500'
    }
});