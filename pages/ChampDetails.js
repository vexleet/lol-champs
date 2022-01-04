import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import Chip from '../components/Chip';
import SpellCard from '../components/SpellCard';

const ChampDetails = () => {
  const roles = ['Support', 'Fighter'];
  const spells = [
    {
      name: 'Damnation',
      description:
        'Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.',
      image: {
        full: 'Thresh_Passive.png',
      },
    },
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

  const rolesComponents = [];
  const spellsComponents = [];

  for (let i = 0; i < roles.length; i++) {
    rolesComponents.push(<Chip style={styles.roleChip}>{roles[i]}</Chip>);
  }

  for (let i = 0; i < spells.length; i++) {
    spellsComponents.push(
      <SpellCard
        styles={{ marginBottom: 10 }}
        spellImage={spells[i].image.full}
        spellDesc={spells[i].description}
        spellName={spells[i].name}
      />,
    );
  }

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

          <View style={styles.rolesContainer}>{rolesComponents}</View>

          <Text style={[styles.whiteText, styles.champDetailsHeading]}>Lore</Text>
          <Text style={[styles.whiteText, styles.loreText]}>
            Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles.
            Once the custodian of countless arcane secrets, he was undone by a power greater than
            life or death, and now sustains himself by tormenting and breaking others with slow,
            excruciating inventiveness. His victims suffer far beyond their brief mortal coil as
            Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture
            for all eternity.
          </Text>

          <Text style={[styles.whiteText, styles.champDetailsHeading, { marginBottom: 15 }]}>
            Spells
          </Text>

          {spellsComponents}
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
    top: -150,
    height: '100%',
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
  rolesContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginBottom: 20,
  },
  roleChip: {
    marginRight: 5,
  },
  champDetailsHeading: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  loreText: {
    fontSize: 18,
    marginBottom: 25,
  },
});

export default ChampDetails;
