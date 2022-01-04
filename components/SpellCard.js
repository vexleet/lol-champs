import { StyleSheet, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

const SpellCard = (props) => {
  return (
    <View style={[styles.spellCardContainer, props.styles]}>
      <Image style={styles.spellImage} source={require('../assets/images/ThreshQ.png')} />

      <View style={styles.spellAboutContainer}>
        <Text style={styles.spellName}>{props.spellName}</Text>
        <Text style={styles.spellDesc}>{props.spellDesc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spellCardContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#413E3E',
    borderRadius: 10,
    minHeight: 98,
  },
  spellImage: {
    marginRight: 10,
    alignSelf: 'center',
  },
  spellAboutContainer: {
    flex: 1,
  },
  spellName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  spellDesc: {
    fontSize: 14,
    color: '#fff',
  },
});

SpellCard.propTypes = {
  styles: PropTypes.object,
  spellImage: PropTypes.string,
  spellName: PropTypes.string,
  spellDesc: PropTypes.string,
};

export default SpellCard;
