import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import ChampionCardList from '../components/ChampionCardList';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fetchAllChampions } from '../services/champions';

const Home = () => {
  const [champions, setChampions] = useState([]);
  const [searchText, onChangeSearchText] = useState('');
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllChampions();
      const dataKeys = Object.keys(data);
      const cardListTest = [];

      for (let i = 0; i < dataKeys.length; i++) {
        const currentChamp = data[dataKeys[i]];
        cardListTest.push({
          id: currentChamp.id,
          name: currentChamp.name,
          title: currentChamp.title,
        });
      }

      setChampions(cardListTest);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const onSearch = () => {
    const filteredChampionsCopy = [];
    setFilteredChampions([]);

    for (let i = 0; i < champions.length; i++) {
      if (champions[i].name.toLowerCase().includes(searchText.toLowerCase())) {
        filteredChampionsCopy.push({ ...champions[i] });
      }
    }

    setFilteredChampions(filteredChampionsCopy);
  };

  const onClear = () => {
    onChangeSearchText('');
    setFilteredChampions([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn about your Champion</Text>

      <View style={styles.searchContainer}>
        <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} color={'#6D6363'} size={22} />

        <TextInput
          style={styles.searchInput}
          placeholder='Search for a champion'
          value={searchText}
          onChangeText={onChangeSearchText}
          onBlur={onSearch}
        />

        {searchText !== '' && (
          <TouchableWithoutFeedback onPress={onClear}>
            <FontAwesomeIcon style={styles.closeIcon} icon={faTimes} color={'#6D6363'} size={22} />
          </TouchableWithoutFeedback>
        )}
      </View>

      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size='large' color='#fff' />
      ) : (
        <ChampionCardList
          champions={
            searchText === '' && filteredChampions.length === 0 ? champions : filteredChampions
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 42,
    color: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 1,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingLeft: 40,
  },
});

export default Home;
