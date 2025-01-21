import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import API from '../utils/api';

const ToDoListScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'User not authenticated');
        return;
      }
      const response = await API.get('/items', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(response.data);
    } catch (error) {
      console.error('Fetch Items Error:', error.response || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Failed to fetch items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'User not authenticated');
        return;
      }
      await API.delete(`/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
      Alert.alert('Success', 'Item deleted successfully');
    } catch (error) {
      console.error('Delete Item Error:', error.response || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Failed to delete item');
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? item.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditItem', { item, refreshList: fetchItems })}
      >
        <Text>Title: {item.title}</Text>
        <Text>Genre: {item.genre}</Text>
        <Text>Date: {new Date(item.watchDate).toDateString()}</Text>
        <Text>Episode: {item.lastEpisode}</Text>
        <Text>Status: {item.status}</Text>
        <Text>Note: {item.note}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item._id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>History Watch</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={filterStatus}
          onValueChange={(value) => setFilterStatus(value)}
          style={styles.picker}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Finished" value="selesai" />
          <Picker.Item label="Unfinished" value="belum" />
        </Picker>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('AddItem', {
              refreshList: fetchItems,
            })
          }
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingBottom: 60 },
  header: { padding: 15, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  picker: { flex: 1, height: 50, borderWidth: 1, borderColor: '#ccc', marginRight: 10 },
  addButton: { backgroundColor: '#6200EE', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 5 },
  addButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 8,
    elevation: 2,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#D32F2F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
});

export default ToDoListScreen;
