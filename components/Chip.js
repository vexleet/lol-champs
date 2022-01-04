import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Chip = (props) => {
  return (
    <View style={[styles.chipContainer, props.style]}>
      <Text style={styles.chipText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: '#F05454',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  chipText: {
    fontSize: 13,
    color: '#fff',
  },
});

Chip.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
};

export default Chip;
