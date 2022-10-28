import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react';
import { FakeUserData } from './CoffeeStories';

export default function CommentsComponent() {
  return (
    <View style={styles.mainCommentsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 40, alignItems: 'center'}}>
            <Text style={styles.ResturantReviewTxt}>Resturant Reviews</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 25, fontWeight: '600'}}>+</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.mainViewContainer} >
          {
              FakeUserData.map((users, index) => (
               <View key={index} style={{flexDirection: 'row', marginBottom: 10}}> 
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
        <Image source={FakeUserData}  style={{width: 50, height: 50, borderRadius: 50}}/>
    )
};

const UserComments = () => {
    return (
        <Text>
            This is a super long comment yay This is a super long comment yay This is a super long comment yayThis is a super long comment yay
        </Text>
    )
};

const DateAndTime = () => {
    return (
        <Text>
            date and time
        </Text>
    )
};

const styles = StyleSheet.create({
    commentAndTimeContainer: {
        marginLeft: 20,
        flexWrap: 'nowrap',
        width: '90%'
    },
    ResturantReviewTxt: {
        fontWeight: '500',
        fontSize: 20
    },
    mainCommentsContainer: {
        marginLeft: 10,
    },
    mainViewContainer: {
        padding: 20,
        alignItems: 'center',
    }
});