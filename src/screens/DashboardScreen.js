import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

const newsData = [
  {
    id: 1,
    title: 'Film Baru Resident Evil Dirumorkan Akan Hadir Dengan Sentuhan Horor Baru',
    description: 'Film Resident Evil terbaru dirumorkan akan membawa nuansa horor baru yang lebih mendalam.',
    image: 'https://cinemags.org/wp-content/uploads/2025/01/Resident-Evil.jpg',
    publishedAt: '2025-01-21',
    url: 'https://cinemags.org/film-baru-resident-evil-dirumorkan-akan-hadir-dengan-sentuhan-horor-baru/',
  },
  {
    id: 2,
    title: 'AI in Filmmaking: Challenges and Opportunities',
    description: 'Adrien Brody explores AI’s role in the future of filmmaking in "The Brutalist".',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/12/https___cdn.sanity.io_images_xq1bjtf4_production_54fb9ced383eea912527204dfbb105129442c238-3586x2160-H-2024.jpg',
    publishedAt: '2025-01-20',
    url: 'https://www.hollywoodreporter.com/movies/movie-news/the-brutalist-ai-backlash-adrien-brody-1236113015/',
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleImageError = (e) => {
    console.error('Error loading image', e.nativeEvent.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Latest News</Text>
      <ScrollView>
        {newsData.map((news) => (
          <View key={news.id} style={styles.newsCard}>
            <Image
              source={{ uri: news.image }}
              style={styles.newsImage}
              onError={handleImageError}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.newsDate}>Published: {news.publishedAt}</Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() =>
                  navigation.navigate('NewsDetail', {
                    newsItem: news,
                  })
                }
              >
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  newsImage: {
    width: '100%',
    height: 200, // Tinggi gambar diperbesar
    backgroundColor: '#ccc',
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  newsDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#6200EE',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  readMoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default DashboardScreen;
