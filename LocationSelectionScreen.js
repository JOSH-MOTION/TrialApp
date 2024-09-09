import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const LocationSelectionScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');

  const handleFindService = () => {
    // Validate location input if needed
    if (location.trim() === '') {
      alert('Please enter a location');
      return;
    }

    // Navigate to the FindServiceScreen with the entered location
    navigation.navigate('FindService', { location });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location here"
        value={location}
        onChangeText={setLocation}
      />
      <Button
        title="Find Nearby Service"
        onPress={handleFindService}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LocationSelectionScreen;
