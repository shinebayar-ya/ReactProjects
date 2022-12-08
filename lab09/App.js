import React, { useEffect } from 'react';

import HomeScreen from './src/screen/HomeScreen';
import MapScreen from './src/screen/MapScreen';
import { initDb, insertPlace, getPlaces, clearPlaces } from './src/helpers/db'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [item, setItem] = useState([]);
  useEffect (() => {
    initDb()
    .then((result) => {
      (async () => {
        console.log('Өгөгдлүүдийг баазад хийх гэж байна ...');
        const r1 = await insertPlace(
          'coffee',
          'file://coffee.jpg',
          'address1',
          23.12,
          -33.233
        );
        console.log('Record ID: ', r1.insertId);
        const r2 = await insertPlace(
          'bassein',
          'file://bassein.jpg',
          'address2',
          33.12,
          -22.233
        );
        console.log('Record ID: ', r2.insertId);
        const result = await getPlaces();
        setItem(result)
        console.log('Result: ', result.rows._array);
        await clearPlaces();
      })();
      console.log('Бааз бэлтгэж дууслаа');
    })
    .catch((err) => console.log('Бааз бэлтгэхэд асуудал гарлаа !!!', err));
  }, []);

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundcolor: '#6A89CC',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 22
          }
        }}
      >
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{ title: 'welcome' }}
        />
        <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};