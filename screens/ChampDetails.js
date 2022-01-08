import { StyleSheet, ScrollView, Text, Image, View, ActivityIndicator } from 'react-native';
import ChampionSpells from '../components/ChampionSpells';
import ChampionRoles from '../components/ChampionRoles';
import ChampionSkins from '../components/ChampionSkins';
import { useEffect, useState } from 'react';
import { fetchChampionByName } from '../services/champions';
import { useParams } from 'react-router-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';

const ChampDetails = () => {
  const params = useParams();

  const championName = params.championName;
  const [champion, setChampion] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchChampionByName(championName);

      setChampion(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const getSpells = () => {
    return [champion.passive, ...champion.spells];
  };

  const getSkins = () => {
    return champion.skins.slice(1, -1).map((skin) => ({
      id: skin.id,
      uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${championName}_${skin.num}.jpg`,
      name: skin.name,
    }));
  };

  return (
    <ScrollView style={styles.champDetailsContainer}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size='large' color='#fff' />
      ) : (
        <View>
          <Link to='/' style={styles.goBackIcon}>
            <FontAwesomeIcon icon={faArrowCircleLeft} color='#fff' size={40} />
          </Link>
          <Image
            style={styles.championImage}
            source={{
              uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${championName}_0.jpg`,
            }}
          />

          <View style={styles.championDetailsContainer}>
            <Image
              style={styles.backgroundImage}
              source={require('../assets/images/ChampionDetailsBackground.png')}
            />

            <View style={styles.championDetailsWrapper}>
              <Text style={[styles.whiteText, styles.championName]}>{champion.name}</Text>
              <Text style={[styles.whiteText, styles.championTitle]}>{champion.title}</Text>

              <ChampionRoles roles={champion.tags} />

              <Text style={[styles.whiteText, styles.champDetailsHeading]}>Lore</Text>
              <Text style={[styles.whiteText, styles.loreText]}>{champion.lore}</Text>

              <View>
                <Text style={[styles.whiteText, styles.champDetailsHeading]}>Spells</Text>

                <ChampionSpells spells={getSpells()} />

                <Text style={[styles.whiteText, styles.champDetailsHeading]}>Skins</Text>

                <ChampionSkins skins={getSkins()} />
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  champDetailsContainer: {
    backgroundColor: '#121212',
  },
  goBackIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 20,
  },
  championImage: {
    width: '100%',
    height: 344,
  },
  championDetailsContainer: {
    position: 'relative',
    marginTop: -150,
    // backgroundColor: '#121212',
    paddingBottom: 25,
  },
  championDetailsWrapper: {
    padding: 20,
    paddingTop: 50,
  },
  whiteText: {
    color: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  championName: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: -10,
  },
  championTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  champDetailsHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loreText: {
    fontSize: 18,
    marginBottom: 25,
  },
});

export default ChampDetails;
