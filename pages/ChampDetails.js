import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import ChampionSpells from '../components/ChampionSpells';
import ChampionRoles from '../components/ChampionRoles';
import ChampionSkins from '../components/ChampionSkins';

const ChampDetails = () => {
  const roles = ['Support', 'Fighter'];
  const spells = [
    {
      name: 'Death Sentence',
      description:
        'Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.',
      image: {
        full: 'ThreshQ.png',
      },
    },
    {
      name: 'Dark Passage',
      description:
        'Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.',
      image: {
        full: 'ThreshW.png',
      },
    },
    {
      name: 'Flay',
      description:
        "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
      image: {
        full: 'ThreshE.png',
      },
    },
    {
      name: 'The Box',
      description: 'A prison of walls that slow and deal damage if broken.',
      image: {
        full: 'ThreshRPenta.png',
      },
    },
  ];
  const passive = {
    name: 'Damnation',
    description:
      'Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.',
    image: {
      full: 'Thresh_Passive.png',
    },
  };
  const skins = [
    {
      id: '412000',
      num: 0,
      name: 'default',
    },
    {
      id: '412001',
      num: 1,
      name: 'Deep Terror Thresh',
    },
    {
      id: '412002',
      num: 2,
      name: 'Championship Thresh',
    },
    {
      id: '412003',
      num: 3,
      name: 'Blood Moon Thresh',
    },
    {
      id: '412004',
      num: 4,
      name: 'SSW Thresh',
    },
    {
      id: '412005',
      num: 5,
      name: 'Dark Star Thresh',
    },
    {
      id: '412006',
      num: 6,
      name: 'High Noon Thresh',
    },
    {
      id: '412013',
      num: 13,
      name: 'Pulsefire Thresh',
    },
    {
      id: '412014',
      num: 14,
      name: 'Pulsefire Thresh Prestige Edition',
    },
    {
      id: '412015',
      num: 15,
      name: 'FPX Thresh',
    },
    {
      id: '412017',
      num: 17,
      name: 'Spirit Blossom Thresh',
    },
    {
      id: '412027',
      num: 27,
      name: 'Unbound Thresh',
    },
    {
      id: '412028',
      num: 28,
      name: 'Steel Dragon Thresh',
    },
  ];

  const getSpells = () => {
    return [passive, ...spells];
  };

  const getSkins = () => {
    return skins.slice(1, -1);
  };

  return (
    <ScrollView>
      <Image style={styles.championImage} source={require('../assets/images/Thresh_0.jpg')} />

      <View style={styles.championDetailsContainer}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/ChampionDetailsBackground.png')}
        />

        <View style={styles.championDetailsWrapper}>
          <Text style={[styles.whiteText, styles.championName]}>Thresh</Text>
          <Text style={[styles.whiteText, styles.championTitle]}>the Chain Warden</Text>

          <ChampionRoles roles={roles} />

          <Text style={[styles.whiteText, styles.champDetailsHeading]}>Lore</Text>
          <Text style={[styles.whiteText, styles.loreText]}>
            Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles.
            Once the custodian of countless arcane secrets, he was undone by a power greater than
            life or death, and now sustains himself by tormenting and breaking others with slow,
            excruciating inventiveness. His victims suffer far beyond their brief mortal coil as
            Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture
            for all eternity.
          </Text>

          <View>
            <Text style={[styles.whiteText, styles.champDetailsHeading]}>Spells</Text>

            <ChampionSpells spells={getSpells()} />

            <Text style={[styles.whiteText, styles.champDetailsHeading]}>Skins</Text>

            <ChampionSkins skins={getSkins()} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  championImage: {
    width: '100%',
    height: 344,
  },
  championDetailsContainer: {
    position: 'relative',
    marginTop: -150,
    backgroundColor: '#121212',
    paddingBottom: 25,
  },
  championDetailsWrapper: {
    padding: 20,
    paddingTop: 50,
  },
  whiteText: {
    color: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  championName: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: -10,
  },
  championTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  champDetailsHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loreText: {
    fontSize: 18,
    marginBottom: 25,
  },
});

export default ChampDetails;
