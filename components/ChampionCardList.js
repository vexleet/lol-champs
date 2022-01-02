import { StyleSheet, ScrollView, View } from 'react-native';
import ChampionCard from './ChampionCard';

const ChampionCardList = () => {
  const champions = [
    {
      image: require('../assets/images/Thresh_Render.png'),
      name: 'Thresh',
      title: 'the Chain Warden',
    },
    {
      image: require('../assets/images/Jhin_Render.png'),
      name: 'Jhin',
      title: 'the Virtuoso',
    },
    {
      image: require('../assets/images/Kassadin_Render.png'),
      name: 'Kassadin',
      title: 'the Void Walker',
    },
    {
      image: require('../assets/images/Yasuo_Render.png'),
      name: 'Yasuo',
      title: 'the Unforgiven',
    },
    {
      image: require('../assets/images/Evelynn_Render.png'),
      name: 'Evelynn',
      title: "the Agony's Embrace",
    },
    {
      image: require('../assets/images/Ornn_Render.png'),
      name: 'Ornn',
      title: 'the Fire below the Mountain',
    },
  ];

  const cardList = [];

  for (let i = 0; i < champions.length; i++) {
    cardList.push(
      <ChampionCard
        style={styles.championCard}
        name={champions[i].name}
        title={champions[i].title}
        image={champions[i].image}
      />,
    );
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.championCardListContainer}>{cardList}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginHorizontal: -15,
  },
  championCardListContainer: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  championCard: {
    marginBottom: 30,
  },
});

export default ChampionCardList;
