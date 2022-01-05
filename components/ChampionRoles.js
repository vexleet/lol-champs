import { StyleSheet, View } from 'react-native';
import Chip from './Chip';
import PropTypes from 'prop-types';

const ChampionRoles = (props) => {
  const rolesComponents = [];
  const roles = props.roles;

  for (let i = 0; i < roles.length; i++) {
    rolesComponents.push(
      <Chip style={styles.roleChip} key={roles[i]}>
        {roles[i]}
      </Chip>,
    );
  }

  return <View style={styles.rolesContainer}>{rolesComponents}</View>;
};

const styles = StyleSheet.create({
  rolesContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginBottom: 20,
  },
  roleChip: {
    marginRight: 5,
  },
});

ChampionRoles.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
};

export default ChampionRoles;
