import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

//TODO: Use ImageBackground component
const ChampionSkinCard = (props) => {
  return (
    <View style={[styles.skinCardContainer, props.style]}>
      <Image style={styles.skinImage} source={props.image} />
      <Text style={styles.skinName}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skinCardContainer: {
    position: 'relative',
    width: 135,
    height: 245,
    flexDirection: 'row',
  },
  skinImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  skinName: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 15,
  },
});

ChampionSkinCard.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ChampionSkinCard;
