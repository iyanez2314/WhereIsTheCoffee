import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GOOGLE_API} from '@env';

export default function SearchBar() {
  return (
    <View style={styles.SearchView}>
      <GooglePlacesAutocomplete
        placeholder='Type in your city'
        query={{key: GOOGLE_API}}
        renderLeftButton={() => (
            <View style={styles.leftButtonView}>
                <CityIcon name='city-variant-outline' size={25}/>
            </View>
        )}
        renderRightButton={() => (
            <View style={styles.searchBtnView}>
                <Text>Search</Text>
            </View>
        )}
        styles={{
            textInput: {
                borderRadius: 20,
                fontWeight: '600',
                marginTop: 7
            },
            textInputContainer: {
                backgroundColor: 'white',
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
                marginLeft: 10
            }
        }}
       />
    </View>
  )
};

const styles = StyleSheet.create({
    SearchView:{
        marginTop: 15,
        flexDirection: 'row',
    },
    leftButtonView: {
      marginLeft: 9
    },
    searchBtnView: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    }
});