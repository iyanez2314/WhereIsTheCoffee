import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FakeUserData } from '../components/CoffeeStories';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   const handleCreateUser = () => {
       createUserWithEmailAndPassword(auth, email, password, displayName)
       .then((userCredential) => {
           console.log('Account Created!')
           const user = userCredential.user;
           navigation.navigate('Login')
       })
       .catch(error => {
           console.log(error);
       })
   }

  return (
    <SafeAreaView>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View  style={styles.container}>
        <View style={{marginBottom: 40, marginTop: 255, justifyContent: 'center', alignContent: 'center'}}>
             <Text style={{fontSize: 35, fontWeight: '200'}}>Sign Up</Text>
        </View>
        {/* <Avatar/> */}
        <EmailSignUp email={email} setEmail={setEmail}/>
        {/* <UsernameSignUp displayName={displayName} setDisplayName={setDisplayName}/> */}
        {/* <CitySignUp /> */}
        <PasswordSignUp password={password} setPassword={setPassword}/>
        <SignUpBtn navigation={navigation} handleCreateUser={handleCreateUser}/>
    </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

const EmailSignUp = ({email, setEmail}) => {
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
}

const  UsernameSignUp = ({displayName, setDisplayName}) => {
    return (
        <View style={styles.InputView}>
        <TextInput
            placeholder='Display Name'
            placeholderTextColor="#9E7676"
            style={styles.input}
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
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

const PasswordSignUp = ({password, setPassword}) => {
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

const SignUpBtn = ({navigation, handleCreateUser}) => {
    return (
        <>
            <TouchableOpacity style={styles.touchableStyle} onPress={handleCreateUser}>
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