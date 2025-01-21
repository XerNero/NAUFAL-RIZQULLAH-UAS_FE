import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ToDoListScreen from './src/screens/ToDoListScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import EditItemScreen from './src/screens/EditItemScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import TopMovieScreen from './src/screens/TopMovieScreen'; // Tambahkan layar baru jika ada

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ToDoList" component={ToDoListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditItem" component={EditItemScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TopMovie" component={TopMovieScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight || 20,
  },
});

export default App;

