import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ChampionCardList from './components/ChampionCardList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn about your Champion</Text>

      <TextInput style={styles.searchInput} placeholder='Search for a champion' />

      <ChampionCardList />
    </View>
  );
}

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
  searchInput: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingLeft: 10,
  },
});
