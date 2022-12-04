import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default MapScreen = () => {
    return (
        <View style={styles.contianer}>
            <Text>NewPlace</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});