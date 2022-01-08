import { View } from 'react-native';
import PropTypes from 'prop-types';
import SpellCard from './SpellCard';

const ChampionSpells = (props) => {
  const spells = props.spells;
  const spellsComponents = [];

  for (let i = 0; i < spells.length; i++) {
    spellsComponents.push(
      <SpellCard
        styles={{ marginBottom: 10 }}
        spellImage={spells[i].image.full}
        spellDesc={spells[i].description}
        spellName={spells[i].name}
        key={spells[i].name}
      />,
    );
  }

  return <View>{spellsComponents}</View>;
};

ChampionSpells.propTypes = {
  spells: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      image: {
        full: PropTypes.string,
      },
    }),
  ),
};

export default ChampionSpells;
