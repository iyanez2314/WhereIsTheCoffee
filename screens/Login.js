import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        <EmailChoices/>
        <View>
            <Text style={{marginBottom: 30, fontSize: 20, fontWeight: '400'}}>Or</Text>
        </View>
        <UsernameLogin />
        <PasswordLogin />
        <LoginScreenBtn navigation={navigation}/>
    </View>
  )
};

const  UsernameLogin = () => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Username'
            placeholderTextColor="#9E7676"
            style={styles.input}
         />
        </View>
    )
};

const PasswordLogin = () => {
    return (
        <View style={styles.InputView}>
            {/* <View style={styles.iconView}>
                <PasswordIcon name="form-textbox-password" size={25} color='#9E7676'/>
            </View> */}
        <TextInput
            placeholder='Password'
            placeholderTextColor="#9E7676"
            secureTextEntry={true}
            style={styles.input}
         />
        </View>
    )
};

const LoginScreenBtn = ({navigation}) => {
    return (
        <>

            <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>


             <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot password or username?</Text>
            </TouchableOpacity>

            
        </>    
    )
};

const EmailChoices = () => {
    return (
        <>
            <TouchableOpacity style={[styles.emailContainer, {backgroundColor: '#de5246'}]}>
                <GmailIcon name="gmail" size={25} color='white' />
                <Text style={styles.GmailTxt}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.emailContainer, {backgroundColor: 'black'}]}>
                <AppleIcon name="apple" size={25} color='white'/>
                <Text style={styles.AppleTxt}>Login with Apple</Text>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: '70%',
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
        height: 45,
    },
    input: {
        height: 50,
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
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
        fontWeight: '500'
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
        fontWeight: '500'
    },
    AppleTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    forgotContainer: {
        marginTop: 15
    }
});