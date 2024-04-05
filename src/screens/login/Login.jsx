import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import bcrypt from 'react-native-bcrypt';
//Components
import Button from '../../components/Button';
//Styles
import Styles from '../../styles/Styles';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(password);
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      navigation.navigate('Home'); // Navegar a la pantalla principal
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/login-background.jpg')}
      style={Styles.LoginBackground}>
      {/* Login Text */}
      <View style={Styles.LoginTextBox}>
        <Text style={Styles.WhiteSubtitle}> ¡Hey! Bienvenido a </Text>
        <Text style={Styles.WhiteTitle}> Mike BarberStudio </Text>
      </View>

      {/* Login Data */}
      <View style={Styles.LoginData}>
        <TextInput
          placeholder='Ingrese su email'
          onChangeText={text => setEmail(text)}
          style={Styles.LoginInput}
          autoCapitalize="none" />
        <TextInput
          placeholder='Ingrese su contraseña'
          style={Styles.LoginInput}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none" />
      </View>

      {/* Login button */}
      <View style={{ marginTop: '5%', alignItems: 'center' }}>
        <Button onPress={handleLogin} />
      </View>

      {/* Login Options */}
      <View style={Styles.LoginOptions}>
        <Pressable onPress={() => { console.log('Crear cuenta') }}>
          <Text style={Styles.WhiteText}>Crear una cuenta</Text>
        </Pressable>
        <Text style={Styles.WhiteText}> | </Text>
        <Pressable onPress={() => { console.log('Olvidaste tu contraseña') }}>
          <Text style={Styles.WhiteText}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
      </View>

    </ImageBackground>
  );
};

export default Login;