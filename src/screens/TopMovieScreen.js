import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Navbar from '../components/Navbar'; // Pastikan path ini sesuai dengan file Navbar.js Anda

const topMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image: 'https://covers.mymovies.dk/ed44fb81-6afc-4078-b090-4a2e5f2a8ba6.jpg',
    rating: '9.3',
    duration: '2h 22m',
    year: 1994,
  },
  {
    id: 2,
    title: 'The Godfather',
    image: 'https://media.posterlounge.com/img/products/710000/705436/705436_poster.jpg',
    rating: '9.2',
    duration: '2h 55m',
    year: 1972,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: 'https://static.wikia.nocookie.net/cinemorgue/images/9/90/11165160_800.jpg/revision/latest?cb=20150519172206',
    rating: '9.0',
    duration: '2h 32m',
    year: 2008,
  },
  {
    id: 4,
    title: 'The Godfather Part II',
    image: 'https://upload.wikimedia.org/wikipedia/id/thumb/0/03/Godfather_part_ii.jpg/220px-Godfather_part_ii.jpg',
    rating: '9.0',
    duration: '3h 22m',
    year: 1974,
  },
  {
    id: 5,
    title: '12 Angry Men',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_(1957_film_poster).jpg',
    rating: '9.0',
    duration: '1h 36m',
    year: 1957,
  },
  {
    id: 6,
    title: 'The Lord of the Rings: The Return of the King',
    image: 'https://m.media-amazon.com/images/I/51TLQte5AsL._AC_UF894,1000_QL80_.jpg',
    rating: '9.0',
    duration: '3h 21m',
    year: 2003,
  },
  {
    id: 7,
    title: "Schindler's List",
    image: 'https://upload.wikimedia.org/wikipedia/id/3/38/Schindler%27s_List_movie.jpg',
    rating: '9.0',
    duration: '3h 15m',
    year: 1993,
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    image: 'https://static.wikia.nocookie.net/dublagempedia/images/6/64/Pulp_Fiction-_Tempo_de_Viol%C3%AAncia.jpg/revision/latest?cb=20210211034409&path-prefix=pt-br',
    rating: '8.9',
    duration: '2h 34m',
    year: 1994,
  },
  {
    id: 9,
    title: 'Inception',
    image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjMyMF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: '8.8',
    duration: '2h 28m',
    year: 2010,
  },
  {
    id: 10,
    title: 'The Matrix',
    image: 'https://m.media-amazon.com/images/M/MV5BNzQzZjY1ODktYjMyOS00M2U5LTlkYWEtMTdmZDFlZTI5M2YxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
    rating: '8.7',
    duration: '2h 16m',
    year: 1999,
  },
];

const TopMovieScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Navbar /> {/* Navbar berada di atas */}
      <Text style={styles.headerText}>TOP MOVIE</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {topMovies.map((movie) => (
          <View key={movie.id} style={styles.card}>
            <Image source={{ uri: movie.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieDetails}>
              Rating: {movie.rating} | Duration: {movie.duration}
            </Text>
            <Text style={styles.movieYear}>Year: {movie.year}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: Dimensions.get('window').width / 2 - 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  movieDetails: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  movieYear: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default TopMovieScreen;
