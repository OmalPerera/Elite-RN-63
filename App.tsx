import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import { DATA } from './movie-list';

const App: () => React$Node = () => {

  const renderItem = ({ item }) => (
    <Item itemData={item} />
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.homePageTitle}>Movies</Text>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Item = ({ itemData }) => {
  return (
    <View style={styles.singleListItemContainer}>
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.movieImage}
          source={{
            uri: itemData.thumbnail,
          }}
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.movieName}>{itemData.title}</Text>
        <Text style={styles.movieInfoText}>{itemData.year + ', ' + itemData.duration}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { Linking.openURL(itemData.youtubeUrl); }}
        >
          <Text style={styles.watchNowSty}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  homePageTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: 'black'
  },
  bodyContainer: {
    flex: 9,
  },
  movieName: {
    fontSize: 16,
    color: '#222'
  },
  singleListItemContainer: {
    flex: 1,
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
