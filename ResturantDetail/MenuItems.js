import { View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import React from 'react'

const FakeCoffeeInfo = [
    {
        title: 'The Best Cofee',
        description: 'It’s a single or double-shot topped up with hot water to give a rich and delicious cup of coffee that can be enjoyed black or milk and sugar added.',
        price: '$7.45',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
    {
        title: 'The Americano',
        description: 'It’s a single or double-shot topped up with hot water to give a rich and delicious cup of coffee that can be enjoyed black or milk and sugar added.',
        price: '$7.15',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
    {
        title: 'Espresso Lungo',
        description: 'the Lungo is an espresso brewed with more hot water than the single or double shot options',
        price: '$8.86',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
    {
        title: 'Ristretto',
        description: 'ristretto is a short espresso shot. Rather than extracting the coffee over 25-30 seconds, the ristretto is extracted over 15-20 seconds using a finer grind and less water',
        price: '$5.97',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
    {
        title: 'Cortado',
        description: 'The cortado is simply an espresso shot served with equal parts steamed milk to help reduce the acidity',
        price: '$12.15',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
    {
        title: 'Latte',
        description: 'A coffee shop classic, the caffe latte translates as coffee with milk',
        price: '$6.35',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
    },
]

export default function MenuItems() {
  return (
    <View>
      {
          FakeCoffeeInfo.map((coffees, index) => (
              <View key={index} style={styles.mainView}>
                  <MenuItemDescription 
                  title={coffees.title} 
                  description={coffees.description} 
                  price={coffees.price}/>
                  <MenuItemImage image={coffees.image}/>
              </View>
          ))
      }
    </View>
  )
};

const MenuItemImage = ({image}) => {
    return (
        <View>
        <Image source={{uri: image}} style={{width: 100, height: 100}}/>
        </View>
    )
}

const MenuItemDescription = ({title, description, price}) => {
    return (
        <View style={styles.text}>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        flexDirection: 'row', 
    },
    ImageView: {
        justifyContent: 'flex-end'
    }
})