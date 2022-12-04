import { React } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.contianer}>
            <Text>Home NewPlace</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MapScreen')}
            >
                <Text style={styles.buttonText}>Press here!!!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
});