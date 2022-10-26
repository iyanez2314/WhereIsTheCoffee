import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export const LocalCoffeeShops = [
    {
        "name": "Texas Grounds Coffee Company",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/OW4lhE5Z_JJuxhjLFjdPdw/o.jpg",
        "rating": 4.5,
    },
    {
        "name": "The Cracked Mug Coffee House",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/GgWfx-756ajBblzVVRe4Pg/o.jpg",
        "rating": 4.0
    },
    {
        "name": "Mas Café",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/M6JQKlFtHPfeK1H1IqOt7g/o.jpg",
        "rating": 5.0
    },
    {
        "name": "Mas Café",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/M6JQKlFtHPfeK1H1IqOt7g/o.jpg",
        "rating": 5.0
    },
    {
        "name": "Mas Café",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/M6JQKlFtHPfeK1H1IqOt7g/o.jpg",
        "rating": 5.0
    },
];


export default function ResturantItems({cityData, navigation}) {
  return (
    <>
    {cityData.map((items, index) => (
        <TouchableOpacity key={index} activeOpacity={1} style={{backgroundColor: '#FFF8EA', marginBottom: 10, marginTop: 10}} 
        onPress={() => navigation.navigate('ResturantDetail', {
            name: items.name,
            image: items.image_url,
            reviews: items.review_count,
            address: items.location.display_address,
            isClosed: items.is_closed,
            rating: items.rating
        })}>
            <CoffeeShopeImage imageURL={items.image_url}/>
            <View style={styles.mainInfoContainer}> 
                <CoffeeShopName LocalCompanies={items.name}/>
                <CoffeeShopRatings CompanyRating={items.rating}/>
            </View> 
        </TouchableOpacity>
    ))}
    </>
  )
};


const CoffeeShopName = ({LocalCompanies}) => {
    return (
        <View style={styles.LocalCompanyView}>
            <Text style={styles.LocalCompanyText}>{LocalCompanies}</Text>
        </View>
    )
};

const CoffeeShopRatings = ({CompanyRating}) => {
    return (
        <View style={styles.CompanyRatingView}>
            <Text style={styles.CompanyRating}>{CompanyRating}</Text>
        </View>
    )
};

const CoffeeShopeImage = ({imageURL}) => {
    return (
        <View>
            <Image source={{uri: imageURL}} style={{width: '100%', height: 180}} />
        </View>
    )
};


const styles = StyleSheet.create({
    mainInfoContainer: {
        padding: 9,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    LocalCompanyView: {},
    LocalCompanyText: {
        fontWeight: '700',
        fontSize: 14,
        color: '#9E7676'
    },
    CompanyRatingView: {
        backgroundColor: '#9E7676',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
    },
    CompanyRating: {
        fontWeight: '700',
        color: '#FFF8EA'
    }
});