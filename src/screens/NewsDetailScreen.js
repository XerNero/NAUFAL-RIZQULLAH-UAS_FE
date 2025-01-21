import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const DetailNewsScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.date}>Published: {newsItem.publishedAt}</Text>

      {/* Gambar Pertama */}
      <Image
        source={{ uri: 'https://cinemags.org/wp-content/uploads/2025/01/Resident-Evil.jpg' }}
        style={styles.image}
      />
      <Text style={styles.content}>
        Sebuah kabar menarik tengah beredar di kalangan penggemar Resident Evil. Berdasarkan laporan dari Bloody
        Disgusting, seri video game legendaris ini kabarnya akan mendapatkan adaptasi film baru. Kali ini, film tersebut
        dirumorkan akan mengadaptasi prekuel game Resident Evil 0, yang pertama kali dirilis di Nintendo GameCube pada
        tahun 2002.
      </Text>
      <Text style={styles.content}>
        Studio di balik film-film Resident Evil, Screen Gems dan Constantin Films, diketahui harus merilis film baru
        setiap lima tahun untuk mempertahankan hak adaptasi seri tersebut. Dengan film terakhir, Resident Evil: Welcome
        to Raccoon City, yang dirilis pada 2021 dan gagal secara kritik maupun finansial, rumor ini menjadi semakin
        kuat. Film terbaru ini kemungkinan besar harus dirilis sebelum awal tahun fiskal berikutnya, yang berarti proses
        produksi perlu segera dimulai.
      </Text>
      <Text style={styles.content}>
        Yang membuat rumor ini semakin menarik adalah laporan bahwa Zach Cregger, sutradara film horor populer Barbarian
        (2022), akan mengarahkan film ini. Cregger dikenal karena kemampuannya menciptakan cerita horor yang menegangkan
        dan atmosferik, menjadikannya pilihan ideal untuk mengadaptasi Resident Evil 0. Game ini sendiri berfokus pada
        kisah Rebecca Chambers, anggota S.T.A.R.S, dan Billy Coen, seorang narapidana, saat mereka mengungkap asal-usul
        T-Virus.
      </Text>

      {/* Gambar Kedua */}
      <Image
        source={{
          uri: 'https://cinemags.org/trailer-internasional-resident-evil-welcome-to-raccoon-city-hadirkan-nuansa-yang-lebih-meyeramkan/resident-evil-welcome-to-raccoon-city-3/',
        }}
        style={styles.image}
      />
      <Text style={styles.content}>
        Kesuksesan adaptasi video game belakangan ini, seperti The Super Mario Bros. Movie dan serial The Last of Us,
        menunjukkan bahwa film atau seri berdasarkan video game dapat berhasil jika setia pada materi sumber sekaligus
        menghadirkan elemen unik. Dengan proyek ini, studio memiliki peluang besar untuk menciptakan film yang
        mendebarkan dan meninggalkan jejak yang kuat di genre zombie dan adaptasi video game.
      </Text>
      <Text style={styles.content}>
        Meskipun Welcome to Raccoon City dan serial Resident Evil di Netflix gagal memuaskan penonton, adaptasi Resident
        Evil 0 ini memiliki potensi besar untuk mengubah narasi tersebut. Jika rumor ini benar, sutradara Zach Cregger
        juga bisa ikut menulis skenario film, seperti yang ia lakukan untuk Barbarian.
      </Text>
      <Text style={styles.content}>
        Saat ini, proyek ini masih berupa spekulasi, tetapi para penggemar berharap franchise ini akhirnya mendapatkan
        film yang bukan hanya sukses secara sinematik, tetapi juga setia pada esensi dari video game-nya.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 15,
  },
});

export default DetailNewsScreen;
