/* eslint-disable import/export */
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {useRouter} from 'expo-router';
const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={Styles.container}>
      <Image source={require('../assets/images/post.png')} style = {Styles.image} />

      <Text style = {Styles.title}>Welcome to Notes App</Text>
      <Text style = {Styles.subtitle}>Capture your thoughts anytime, anywhere</Text>
      <TouchableOpacity onPress={() =>router.push('/notes')} style={Styles.button}>
        <Text style={Styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredContainter: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
