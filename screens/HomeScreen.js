import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ResturantItems from '../components/ResturantItems';
import {YELP_API} from '@env';
import { LocalCoffeeShops } from '../components/ResturantItems';
import CoffeeStories from '../components/CoffeeStories';

export default function HomeScreen({navigation}) {

  const [city, setCity] = useState();
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
    <CoffeeStories />
    </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResturantItems cityData={cityData} navigation={navigation}/>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  MainView: {
    padding: 15,
  }
})