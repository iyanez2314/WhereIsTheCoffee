import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase';

export default function Login({navigation}) {
return (
    <View style={styles.container}>
        <View style={{width: '70%', marginLeft: 20, marginBottom: 60}}>
             <Text style={{fontSize: 35, fontWeight: '200'}}>Login</Text>
        </View>
        
        <EmailChoices/>
        <View>
            <Text style={{marginBottom: 30, fontSize: 25, fontWeight: '200'}}>Or</Text>
        </View>
        <UsernameLogin email={email} setEmail={setEmail}/>
        <PasswordLogin password={password} setPassword={setPassword}/>
        <LoginScreenBtn navigation={navigation} handleSignUp={handleSignUp}/>
    </View>
  )
};

const  UsernameLogin = ({email, setEmail}) => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Username'
            placeholderTextColor="#9E7676"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
         />
        </View>
    )
};

const PasswordLogin = ({password, setPassword}) => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Password'
            placeholderTextColor="#9E7676"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
         />
        </View>
    )
};

const LoginScreenBtn = ({navigation, handleSignUp}) => {
    return (
        <>
            <TouchableOpacity style={styles.touchableStyle} onPress={handleSignUp}>
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