import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

export const FAB = ({title}: Props) => {
  return (
    <TouchableOpacity
      style={styles.fabLocationBR}
      onPress={() => console.log('click')}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  // BR -> Bottom Right
  fabLocationBR: {position: 'absolute', bottom: 25, right: 25},
  // BL -> Bottom Left
  fabLocationBL: {position: 'absolute', bottom: 25, left: 25},
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
