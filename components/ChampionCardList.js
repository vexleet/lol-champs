import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ChampionCard from './ChampionCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';
import { fetchAllChampions } from '../services/champions';
import { useEffect, useState } from 'react';

const ChampionCardList = (props) => {
  // const [champions, setChampions] = useState([]);
  const [cardList, setCardList] = useState([]);

  useEffect(async () => {
    console.log(true);
    const data = await fetchAllChampions();
    const dataKeys = Object.keys(data);
    const cardListTest = [];

    for (let i = 0; i < dataKeys.length; i++) {
      const currentChamp = data[dataKeys[i]];
      cardListTest.push(
        <Link to={`/champion/${currentChamp.name}`} key={currentChamp.name}>
          <ChampionCard
            style={styles.championCard}
            name={currentChamp.name}
            title={currentChamp.title}
          />
        </Link>,
      );
    }

    setCardList(cardListTest);
  }, []);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      {cardList.length ? (
        <View style={styles.championCardListContainer}>{cardList}</View>
      ) : (
        <Text style={styles.noChampionsText}>
          We are sorry, no champions matches your criteria.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginHorizontal: -15,
  },
  championCardListContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  championCard: {
    marginBottom: 30,
  },
  noChampionsText: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 80,
  },
});

ChampionCardList.propTypes = {
  champions: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default ChampionCardList;
