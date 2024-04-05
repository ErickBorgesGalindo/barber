import { Image } from "react-native";
import StackNavigator from "./Routes";
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Poppins-Light.ttf'),
    Normal: require('./assets/fonts/Poppins-Medium.ttf'),
    SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <Image source={require('./assets/splash.png')}/>; // Display a loading indicator while fonts load
  }

  return (
    <StackNavigator/>
  );
}