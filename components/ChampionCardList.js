import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ChampionCard from './ChampionCard';
import PropTypes from 'prop-types';

const ChampionCardList = (props) => {
  const champions = props.champions;
  const cardList = [];

  for (let i = 0; i < champions.length; i++) {
    cardList.push(
      <ChampionCard
        style={styles.championCard}
        name={champions[i].name}
        title={champions[i].title}
        image={champions[i].image}
        key={i}
      />,
    );
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      {cardList.length ? (
        <View style={styles.championCardListContainer}>{cardList}</View>
      ) : (
        <Text style={styles.noChampionsText}>
          We are sorry, no champions matches your critieria.
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
      image: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default ChampionCardList;
