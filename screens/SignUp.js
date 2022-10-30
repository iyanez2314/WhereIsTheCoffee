import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FakeUserData } from '../components/CoffeeStories';

export default function SignUp({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
        <View style={{width: '70%', marginLeft: 20, marginBottom: 40, marginTop: 90}}>
             <Text style={{fontSize: 35, fontWeight: '200'}}>Sign Up</Text>
        </View>
        <Avatar/>
        <EmailSignUp />
        <UsernameSignUp />
        <CitySignUp />
        <PasswordSignUp />
        <SignUpBtn navigation={navigation}/>
    </SafeAreaView>
  )
};

const EmailSignUp = () => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Email'
            placeholderTextColor="#9E7676"
            style={styles.input}
         />
        </View>
    )
}

const  UsernameSignUp = () => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Display Name'
            placeholderTextColor="#9E7676"
            style={styles.input}
         />
        </View>
    )
};

const CitySignUp = () => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='City'
            placeholderTextColor="#9E7676"
            style={styles.input}
         />
        </View>
    )
}

const PasswordSignUp = () => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Password'
            placeholderTextColor="#9E7676"
            secureTextEntry={true}
            style={styles.input}
         />
        </View>
        
    )
};

const SignUpBtn = ({navigation}) => {
    return (
        <>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </>    
    )
};

const Avatar = () => {
    return (
        <View style={{width: 100, height: 100, backgroundColor: '#FFF8EA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, marginBottom: 40}}>
           <Text style={styles.loginText}>User Avatar</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconView: {
        position: 'absolute',
        left: 10,
        top: 10 
    },
    btnView: {
        marginTop: 60
    },
    InputView: {
        backgroundColor: '#FFF8EA',
        width: '60%',
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
        height: 45,
    },
    input: {
        height: 50,
        flex: 1,
        fontSize: 16,
        fontWeight: '200',
        color: '#9E7676'
    },
    touchableStyle:{
        width: '80%',
        backgroundColor: '#FFF8EA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        marginTop: 25
    },
    loginText: {
        color: '#9E7676',
        fontSize: 15,
        fontWeight: '200'
    },
    forgotText: {
        fontWeight: '200',
        fontSize: 15,
        marginBottom: 10,
        height: 30
    },
    emailChoices:{
        backgroundColor: 'red',
        width: '70%',
        alignItems: 'center'
    },
    emailContainer: {
        marginBottom: 40,
        width: '70%',
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 30
    },
    GmailTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400'
    },
    AppleTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400'
    },
    forgotContainer: {
        marginTop: 15
    }
});