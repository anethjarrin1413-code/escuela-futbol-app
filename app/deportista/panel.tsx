import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function DeportistaPanel(){
    const router = useRouter();
  return(
    <View style={styles.container}> 
        
      < Image 
         source={require('../../assets/images/logo.jpeg')}
         style={styles.logo}
         resizeMode = "contain"
      />

      <Text style={[styles.title, styles.italicText]}> 
         PANEL DEPORTISTA
      </Text>

      <Text style={styles.welcome}>
         Bienvenida
      </Text>

      <View style={styles.menu}>

        <Pressable style={styles.button}
            onPress = {() => router.push('/deportista/perfil')}>
            <Text style={styles.buttonText}>
               👤 PERFIL
            </Text>
        </Pressable>

        <Pressable style={styles.button}
            onPress = {() => router.push('/deportista/horario')}> 
            <Text style={styles.buttonText}>
               📅 HORARIO
            </Text>
        </Pressable>

        <Pressable style={styles.button}
            onPress = {() => router.push('/deportista/asistencia')}>
            <Text style={styles.buttonText}>
               ✅ ASISTENCIA
            </Text>
        </Pressable>

         <Pressable style={styles.button}
            onPress = {() => router.push('/deportista/pagos')}>
            <Text style={styles.buttonText}>
               💳 PAGOS
            </Text>
        </Pressable>
       
      </View>

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

    logo: {
        width: 175,
        height: 175,
        marginBottom: 10,
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

    menu: {
        width: '100%',
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