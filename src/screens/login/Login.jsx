import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import bcrypt from 'react-native-bcrypt';
//Components
import Button from '../../components/Button';
//Styles
import Styles from '../../styles/Styles';
import { esp, eng } from '../../components/Language';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badInfo, setBadInfo] = useState(false);

  const handleLogin = async () => {
    // const hashedPassword = await bcrypt.hash(password, 10);
    try {
      setBadInfo(false);
      console.log(password);
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      navigation.navigate('Home');

    } catch (error) {
      setBadInfo(true);
      console.error(error);
    }
  };

  const language = esp();

  return (
    <ImageBackground
      source={require('../../../assets/images/login-background.jpg')}
      style={Styles.LoginBackground}>
      {/* Login Text */}
      <View style={Styles.LoginTextBox}>
        <Text style={Styles.WhiteSubtitle}> {language.hello} </Text>
        <Text style={Styles.WhiteTitle}> {language.name} </Text>
      </View>

      {/* Login Data */}
      <View style={Styles.LoginData}>
        {
          badInfo ?
            <Text style={Styles.LoginError}>{language.badInfo}</Text> :
            null
        }
        <TextInput
          placeholder={language.mailInput}
          onChangeText={text => setEmail(text)}
          style={Styles.LoginInput}
          autoCapitalize="none" />
        <TextInput
          placeholder={language.passInput}
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
          <Text style={Styles.WhiteText}>{language.createAccount}</Text>
        </Pressable>
        <Text style={Styles.WhiteText}> | </Text>
        <Pressable onPress={() => { console.log('Olvidaste tu contraseña') }}>
          <Text style={Styles.WhiteText}>{language.forgotPassword}</Text>
        </Pressable>
      </View>

    </ImageBackground>
  );
};

export default Login;