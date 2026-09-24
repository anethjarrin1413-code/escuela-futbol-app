import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DeportistaAsistencia() {
  const router = useRouter(); 
  return (
    <View style={styles.container}> 

    <Text style={[styles.title, styles.italicText]}> 
             PANEL DEPORTISTA
          </Text>
    
          <Text style={styles.welcome}>
             Bienvenida
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#FFFFFF',
    },
    
    title:{
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

    italicText: {
        fontStyle: 'italic',
    },

    button: {
        width: '100%',
        padding: 17,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#81C784',
        alignItems: 'center',
    },

    buttonText: {
        color: '#222222',
        fontSize: 16,
        fontWeight: 'bold',
    },

});