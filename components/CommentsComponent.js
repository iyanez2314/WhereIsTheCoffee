import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react';
import { FakeUserData } from './CoffeeStories';

export default function CommentsComponent() {
  return (
    <View style={styles.mainCommentsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 40, alignItems: 'center'}}>
            <Text style={styles.ResturantReviewTxt}>Resturant Reviews</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 25, fontWeight: '600', color: '#9E7676'}}>+</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.mainViewContainer} >
          {
              FakeUserData.map((users, index) => (
               <View key={index} style={{flexDirection: 'row', marginBottom: 10, backgroundColor: '#9E7676', borderRadius: 20}}> 
                    <UserImage FakeUserData={users.userImage}/>
                    <View style={styles.commentAndTimeContainer}>
                        <UserComments />
                        <DateAndTime />
                    </View>
                </View>      
              ))
          }
        </View>  
    </View>
  )
};


const UserImage = ({FakeUserData}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 7}}>
        <Image source={FakeUserData}  style={{width: 50, height: 50, borderRadius: 50}}/>
        </View>
    )
};

const UserComments = () => {
    return (
        <Text style={styles.textColor}>
            This is a super long comment yay 
        </Text>
    )
};

const DateAndTime = () => {
    return (
        <Text style={styles.textColor}>
            10/20/2022
        </Text>
    )
};

const styles = StyleSheet.create({
    textColor: {
        color: '#FFF8EA'
    },
    commentAndTimeContainer: {
        marginLeft: 20,
        flexWrap: 'nowrap',
        width: '90%',
        height: 110,
        justifyContent:'center'
    },
    ResturantReviewTxt: {
        fontWeight: '500',
        fontSize: 20,
        color: '#9E7676'
    },
    mainCommentsContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    mainViewContainer: {
        padding: 20,
        alignItems: 'center',
    }
});