import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function ResturantDetailHeader(props) {

    const {name, image, reviews, address, isClosed, rating} = props.route.params;

  return (
    <View>
      <CoffeeImage image={image} />
        <View style={styles.descriptionView}>
            <CoffeeShopName name={name}/>
            <CoffeShopDescription reviews={reviews} isClosed={isClosed} address={address} name={name} rating={rating}/>
         </View>
    </View>
  )
};

const CoffeeImage = ({image}) => {
    return (
            <Image source={{uri: image}} style={styles.imageStyle}/>
    )
};

const CoffeeShopName = ({name}) => {
    return (
        <View style={styles.ResturantView}>
            <Text style={styles.resturantTitle}>{name}</Text>
        </View>
        
    )
};

const CoffeShopDescription = ({reviews, isClosed, address, name, rating}) => {
    const formatDescription = `🌟 ${rating} (${reviews}+)`;

    return (
        <View>
            <Text style={styles.descriptionText}>{formatDescription}</Text>
            <Text style={styles.descriptionText}>{isClosed ? `${name} is closed` : `${name} is closed`}</Text>
            <Text style={styles.descriptionText}>{address}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 350
    },
    resturantTitle: {
        fontSize: 30,
        fontWeight: '600'
    },
    ResturantView: {
        
    },
    descriptionView: {
        padding: 16
    },
    descriptionText: {

    }
})