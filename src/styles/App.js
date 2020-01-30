import { Colors } from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#2c3a50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#fff',
        fontSize: 20
    },
    btntxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    botao:{
        backgroundColor: '#3498db',
        width: 300,
        height: 42,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 150,
        height: 150,
        borderRadius: 100
    },
    input:{
        marginTop: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 16,
        padding: 10
    }
  });

  export default styles;