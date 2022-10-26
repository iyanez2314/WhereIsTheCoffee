import { View, Text } from 'react-native'
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

/*
    This component is made up of  sub components such as: 
    Coffee Shop text,
    Coffee Shop Image & 
    Coffee Shop Rating
    
    We will make up the sub components Under the main component and send all info to sub components via props
*/

export default function ResturantItems() {
  return (
    <View>
        


    {LocalCoffeeShops.map((items, index) => (
        <View key={index} style={{backgroundColor: 'red', marginBottom: 10, marginTop: 10}}>
        <CoffeeShopName LocalCompanies={items.name}/>
        <Text>{items.rating}</Text>
        </View>
    ))}
    </View>
  )
};


const CoffeeShopName = ({LocalCompanies}) => {
    return (
        <View>
            <Text>{LocalCompanies}</Text>
        </View>
    )
};

const CoffeeShopRatings = () => {};

const CoffeeShopeImage = () => {};
