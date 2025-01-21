import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import API from '../utils/api';

const AddItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const refreshList = route.params?.refreshList; // Dapatkan fungsi refreshList dari navigasi
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    watchDate: '',
    lastEpisode: '',
    status: 'belum', // Default value
    note: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setFormData({ ...formData, watchDate: formattedDate });
    }
  };

  const handleSave = async () => {
    const { title, genre, watchDate, lastEpisode, status, note } = formData;

    if (!title || !genre || !watchDate || !lastEpisode || !status) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'User not authenticated');
        return;
      }

      await API.post('/items', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert('Success', 'Item added successfully');
      if (refreshList) refreshList(); // Panggil fungsi refresh list setelah menyimpan
      navigation.goBack(); // Kembali ke layar sebelumnya
    } catch (error) {
      console.error('Add Item Error:', error.response || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Failed to add item');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={(value) => handleInputChange('title', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={formData.genre}
        onChangeText={(value) => handleInputChange('genre', value)}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text>{formData.watchDate ? formData.watchDate : 'Select Watch Date'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={formData.watchDate ? new Date(formData.watchDate) : new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Last Episode"
        value={formData.lastEpisode}
        onChangeText={(value) => handleInputChange('lastEpisode', value)}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.status}
          onValueChange={(value) => handleInputChange('status', value)}
        >
          <Picker.Item label="Belum" value="belum" />
          <Picker.Item label="Selesai" value="selesai" />
        </Picker>
      </View>
      <TextInput
        style={[styles.input, styles.noteInput]}
        placeholder="Note (Optional)"
        value={formData.note}
        onChangeText={(value) => handleInputChange('note', value)}
      />
      <Button title="Save" onPress={handleSave} color="#6200EE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  noteInput: {
    height: 60,
  },
});

export default AddItemScreen;
