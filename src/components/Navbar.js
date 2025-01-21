import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* Tombol Dashboard */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
        <MaterialIcons name="dashboard" size={24} color="white" />
        <Text style={styles.navText}>Dashboard</Text>
      </TouchableOpacity>

      {/* Tombol ToDo List */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ToDoList')}>
        <MaterialIcons name="list-alt" size={24} color="white" />
        <Text style={styles.navText}>ToDo List</Text>
      </TouchableOpacity>

      {/* Tombol Top Movies */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TopMovie')}>
        <MaterialIcons name="movie" size={24} color="white" />
        <Text style={styles.navText}>Top Movies</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#4A148C',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  navText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 3,
  },
});

export default Navbar;
