import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

const ChampionCard = (props) => {
  return (
    <View style={[styles.championCardContainer, props.style]}>
      <Image style={styles.championImage} source={props.image} />
      <Text style={styles.championName}>{props.name}</Text>
      <Text style={styles.championTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  championCardContainer: {
    backgroundColor: '#2B3239',
    width: 170,
    borderRadius: 15,
    paddingTop: 170,
    paddingHorizontal: 12,
    paddingBottom: 12,
    position: 'relative',
  },
  championImage: {
    width: 175,
    height: 230,
    position: 'absolute',
    top: -20,
    left: 0,
    resizeMode: 'contain',
  },
  championName: {
    // TODO: Add ROBOTO BLACK
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff',
  },
  championTitle: {
    // TODO: Add ROBOTO BOLD
    // fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

ChampionCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export default ChampionCard;