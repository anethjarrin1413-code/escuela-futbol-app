import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

//View style = {styles.container} es todo lo que está dentro y va a pertenercer a la pantalla
//Text <Text style={styles.logo}>⚽</Text> Aquí va todo los escrito y que va a ir como texto
//Pressable <Pressable style={styles.button}> Permite que el usuario presione el botón

export default function HomeScreen() {
  const router = useRouter(); 
  return (
    <View style={styles.container}> 

      <Text style={[styles.title, styles.italicText]}> 
        ESCUELA LDU TÁCTICA DT JARRIN
      </Text>

      < Image 
        source={require('../assets/images/logo.jpeg')}
        style={styles.logo}
        resizeMode = "contain"
      />

      <Text style={styles.welcome}>
        Bienvenido
      </Text>

      <Text style={styles.question}>
        ¿Cómo deseas ingresar?
      </Text>

      <Pressable style={styles.button}
        onPress = {() => router.push('/deportista/login')}> 
        <Text style={styles.buttonText}>
          DEPORTISTA
        </Text>
      </Pressable>

      <Pressable style={styles.button}
        onPress = {() => router.push('/entrenador/login')}>
        <Text style={styles.buttonText}>
          ENTRENADOR
        </Text>
      </Pressable>

      <Pressable style={styles.button}
        onPress = {() => router.push('/administracion/login')}>
        <Text style={styles.buttonText}>
          ADMINISTRACIÓN
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({ //Va a contener el diseño de nuestra pantalla, es decir, los estilos que va a tener nuestra pantalla ya sea el tamaño y color de letra

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#222222',
  },

  welcome: {
    fontSize: 22,
    marginBottom: 10,
    color: '#222222',
  },

  question: {
    fontSize: 16,
    marginBottom: 30,
  },

  italicText: {
    fontStyle: 'italic',
  },

  button: {
    width: '90%',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#1B5E20',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});