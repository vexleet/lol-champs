import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ChampionCard from './ChampionCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';

const ChampionCardList = (props) => {
  const champions = props.champions;
  const cardList = [];

  for (let i = 0; i < champions.length; i++) {
    const currentChamp = champions[i];
    cardList.push(
      <Link to={`/champion/${currentChamp.name}`} key={currentChamp.name}>
        <ChampionCard
          styles={styles.championCard}
          name={currentChamp.name}
          title={currentChamp.title}
          id={currentChamp.id}
        />
      </Link>,
    );
  }

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
      id: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default ChampionCardList;
