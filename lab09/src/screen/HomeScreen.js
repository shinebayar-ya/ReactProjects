import { React, useLayoutEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import MyHeaderButton from '../components/MyHeaderButton';



const Info = ({ title }) => {
    <View>
        <Text>{title}</Text>
    </View>
}



export default HomeScreen = ({ items, navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                <HeaderButtons HeaderButtonComponents={MyHeaderButton}>
                    <Item 
                        title='Add new places'
                        iconName='pluscircleo'
                        onPress={() => navigation.navigate('MapScreen')}
                    />
                </HeaderButtons>
            }
        })
    })

    const renderItem = ({ item }) => {
        <Info title={item.title} />
    }

    return (
        <SafeAreaView style={styles.contianer}>
            <Text>Place list</Text>
            <FlatList 
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                data={items}
                renderItem={renderItem}
            />
        </SafeAreaView>
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