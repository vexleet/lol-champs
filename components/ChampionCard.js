import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { championRenders } from '../data/champion-renders';

const ChampionCard = (props) => {
  return (
    <View style={[styles.championCardContainer, props.styles]}>
      <Image style={styles.championImage} source={championRenders[props.id]} />
      <View style={styles.championNameWrapper}>
        <Text style={styles.championName}>{props.name}</Text>
        <Text style={styles.championTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  championCardContainer: {
    backgroundColor: '#2B3239',
    width: 170,
    minHeight: 260,
    maxHeight: 260,
    borderRadius: 15,
    paddingTop: 170,
    paddingHorizontal: 12,
    paddingBottom: 12,
    position: 'relative',
    flexDirection: 'row',
  },
  championImage: {
    width: 170,
    height: 250,
    position: 'absolute',
    top: -20,
    left: 0,
    resizeMode: 'contain',
  },
  championNameWrapper: {
    alignSelf: 'flex-end',
  },
  championName: {
    // TODO: Add ROBOTO BLACK
    fontWeight: 'bold',
    fontSize: 26,
    color: '#fff',
  },
  championTitle: {
    // TODO: Add ROBOTO BOLD
    // fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

ChampionCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  styles: PropTypes.object,
};

export default ChampionCard;
