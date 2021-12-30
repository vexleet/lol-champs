import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Test = (props) => {
  return <Text>Hello {props.name}</Text>;
};

Test.propTypes = {
  name: PropTypes.string,
};

export default Test;
