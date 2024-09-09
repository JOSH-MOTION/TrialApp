import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServiceSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the Service You Need</Text>
      <Button
        title="Mechanic"
        onPress={() => navigation.navigate('LocationSelection')}
      />
      <Button
        title="Hairdresser"
        onPress={() => navigation.navigate('LocationSelection')}
      />
      <Button
        title="Others"
        onPress={() => navigation.navigate('LocationSelection')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ServiceSelectionScreen;
