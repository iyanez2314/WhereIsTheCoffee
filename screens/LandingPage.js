import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import React from 'react';

export default function LandingPage({navigation}) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={{fontSize: 25, fontWeight: '300', color: '#9E7676'}}>Where is the coffee?</Text>
      <View style={styles.btnContainer}>
                <Pressable style={styles.loginBtn} onPress={() => navigation.navigate('Login')} pressRetentionOffset={{bottom: 30, left: 20, right: 20, top: 20}}>
                    <Text style={styles.btnTxt}>Login</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.signupBtn}>
                    <Text style={styles.btnTxt}>Sign up</Text>
                </Pressable>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        width: 200,
        backgroundColor: '#FFF8EA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        marginTop: 50
    },
    signupBtn: {
        width: 200,
        backgroundColor: '#FFF8EA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        marginTop: 20
    },
    btnTxt: {
        color: '#9E7676',
        fontSize: 15,
        fontWeight: '300'
    }
});

