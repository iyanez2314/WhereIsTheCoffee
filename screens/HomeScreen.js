import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ResturantItems from '../components/ResturantItems';
import {YELP_API} from '@env';
import { LocalCoffeeShops } from '../components/ResturantItems';

export default function HomeScreen() {
/*
  2nd. Once I get the city from the search bar component I need it to use it to fetch the data from the yelp API
  3rd. The data it is fetching needs to be saved in state
  4th. The state needs to be sent to resturant Items and looped through in there.
*/

  const [city, setCity] = useState('San Antonio');
  const [cityData, setCityData] = useState(LocalCoffeeShops);

  const FetchCityData = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=coffee&location=${city}`;

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${YELP_API}`
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setCityData(data.businesses)
    })
  }

  useEffect(() => {
    FetchCityData()
  }, [city])

  return (
    <>
    <SafeAreaView style={{backgroundColor: '#FFF8EA'}}>
    <View style={styles.MainView}>
      <SearchBar setCity={setCity} />
    </View> 
    </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResturantItems cityData={cityData}/>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  MainView: {
    padding: 15,
  }
})