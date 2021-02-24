import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';

const App: () => React$Node = () => {

  const itemData = {
    id: '1',
    title: 'Marvel`s Avengers : Infinty war',
    thumbnail: 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/a4/17/e9/a417e9a4-da6a-4818-17c9-83a741ec3fab/pr_source.lsr/268x0w.png',
    year: '2018',
    duration: '120 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  }

  return (
    <>
      <SafeAreaView></SafeAreaView>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.homePageTitle}>Movies</Text>
        </View>

        {/* Body with movie list */}
        <View style={styles.bodyContainer}>

          {/* single List item container */}
          <View style={styles.singleListItemContainer}>

            {/* movie thumbnail */}
            <View style={styles.thumbnailContainer}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: itemData.thumbnail,
                }}
              />
            </View>

            {/* movie other Infomation */}
            <View style={styles.informationContainer}>
              <Text style={styles.movieName}>{itemData.title}</Text>
              <Text style={styles.movieInfoText}>{itemData.year + ', ' + itemData.duration}</Text>

              {/* Watch Now button */}
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.watchNowSty}>Watch Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  container: {
    flex: 100,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  bodyContainer: {
    flex: 93,
  },
  homePageTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: 'black'
  },
  movieName: {
    fontSize: 16,
    color: '#222'
  },
  singleListItemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  thumbnailContainer: {
    flex: 50,
  },
  informationContainer: {
    flex: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  movieInfoText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10
  },
  movieImage: {
    width: 120,
    height: 150,
    borderRadius: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e73e42",
    justifyContent: 'center',
    width: 120,
    height: 32,
    borderRadius: 5
  },
  watchNowSty: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default App;
