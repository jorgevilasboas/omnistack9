import React, { useState } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, Platform, Text, Image, TextInput, StyleSheet } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');


    async function handleSubmit() {
        const response = await api.post('/sessions', { email });
        const { _id } = response.data;
        console.log(response.data);
        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);
        const user = await AsyncStorage.getItem('user');
        console.log(typeof navigation);
        navigation.navigate('List');
        console.log(user);

    }
    return (
        <KeyboardAvoidingView style={styles.container} enabled={Platform.OS === 'ios'} behavior='padding'>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>SEU EMAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu email"
                    placeholderTextColor="#999"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
