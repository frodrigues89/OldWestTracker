// login.js
import React, { useState } from 'react';
import styles from './styles';
import { Pressable, Text, View, TextInput } from 'react-native';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleLogarPress = () => {
        signInWithEmailAndPassword(auth, userMail, userPass)
            .then((userCredential) =>{
                const user = userCredential.user;
                navigation.navigate('Home', { user } );
                alert('login efetuado');
                console.log(user);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    };
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        
        <View style={styles.midContainer}>
            <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            value={userMail}
            onChangeText={setUserMail}
            />
        </View>
        <View style={styles.midContainer}>
            <TextInput
                style={styles.inputPassword}
                placeholder="Senha"
                secureTextEntry={true}
                value={userPass}
                onChangeText={setUserPass}
                />
        </View>
        <View style={styles.midContainer}>
            <Pressable style={styles.button} onPress={handleLogarPress}>
                <Text style={styles.buttonText}>Logon</Text>
            </Pressable>
        </View>
        </View>
        );
    };
export default Login;