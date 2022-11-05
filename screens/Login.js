import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

export default function Login({navigation}) {
    const Stack = createStackNavigator();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            navigation.navigate('HomeScreen');
            console.log(user);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleCreateUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account Created!');
            const user = userCredential.user;
            navigation.navigate('HomeScreen');
        })
        .catch(error => {
            console.log(error);
        })
    }

return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={{justifyContent: 'center', alignContent: 'center', marginBottom: 30}}>
             <Text style={{fontSize: 35, fontWeight: '200'}}>Login / Sign up</Text>
        </View>
        {/* <EmailChoices/> */}
        {/* <View>
            <Text style={{marginBottom: 30, fontSize: 25, fontWeight: '200'}}>Or</Text>
        </View> */}
        <UsernameLogin email={email} setEmail={setEmail}/>
        <PasswordLogin password={password} setPassword={setPassword}/>
        <LoginScreenBtn handleCreateUser={handleCreateUser} navigation={navigation} handleSignIn={handleSignIn}/>
    </KeyboardAvoidingView>
  )
};

const  UsernameLogin = ({email, setEmail}) => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Email'
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

const LoginScreenBtn = ({handleCreateUser, handleSignIn}) => {
    return (
        <>
            <TouchableOpacity style={styles.touchableStyle} onPress={handleSignIn}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle} onPress={handleCreateUser}>
                <Text style={styles.loginText}>Sign up</Text>
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