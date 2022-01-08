import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ChampionSkinCard from './ChampionSkinCard';

const ChampionSkins = (props) => {
  const skinsComponents = [];

  for (let i = 0; i < props.skins.length; i++) {
    skinsComponents.push(
      <ChampionSkinCard
        style={{ marginRight: 10 }}
        name={props.skins[i].name}
        image={props.skins[i].uri}
        key={props.skins[i].id}
      />,
    );
  }

  return <ScrollView horizontal>{skinsComponents}</ScrollView>;
};

ChampionSkins.propTypes = {
  championName: PropTypes.string,
  skins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      uri: PropTypes.number,
    }),
  ),
};

export default ChampionSkins;
