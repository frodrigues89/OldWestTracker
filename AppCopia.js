import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Características</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',       //horizontal
    justifyContent: 'center'   //Vertical
  },
  logo:{
    marginBottom: 50
  },
  button:{
    backgroundColor: '#0a497b',
    width: "80%",
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
  }
});
