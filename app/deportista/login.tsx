import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

//View style = {styles.container} es todo lo que está dentro y va a pertenercer a la pantalla
//Text <Text style={styles.logo}>⚽</Text> Aquí va todo los escrito y que va a ir como texto
//Pressable <Pressable style={styles.button}> Permite que el usuario presione el botón

export default function HomeScreen() {
  return (
    <View style={styles.container}> 

      <Text style={[styles.title, styles.italicText]}> 
        DEPORTISTA
      </Text>

      <Text style={styles.welcome}>
        INICIO DE SESIÓN
      </Text>

      <Text style={[styles.label, styles.alMargen]}>
        Usuario:
      </Text>

      <TextInput
        style={styles.input}
        placeholder = "Ingrese su usuario"
        placeholderTextColor = "#FFFFFF"
        secureTextEntry = {false}
        autoCapitalize = "none"
       />

       <Text style={[styles.label, styles.alMargen]}>
        Contraseña:
      </Text>

      <TextInput
        style={styles.input}
        placeholder = "Ingrese su contraseña"
        placeholderTextColor = "#FFFFFF"
        secureTextEntry = {true}
        autoCapitalize = "none"
       />

       <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            INGRESAR
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
    backgroundColor: '#2E7D32',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#FFFFFF',
  },

  welcome: {
    fontSize: 22,
    marginBottom: 10,
    color: '#FFFFFF',
  },

   label: {
    fontSize: 22,
    marginBottom: 10,
    color: '#FFFFFF',
  },

  italicText: {
    fontStyle: 'italic',
  },

   alMargen: {
    alignSelf: 'flex-start',
  },

  button: {
    width: '90%',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 16,
    color: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
    paddingVertical: 10,
    marginBottom: 25,
  },
});