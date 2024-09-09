// RequestFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RequestFormScreen = ({ route, navigation }) => {
  const { serviceType } = route.params; // Get the selected service type
  const [problemDescription, setProblemDescription] = useState('');

  const handleSubmit = () => {
    // Here you would typically handle the request, e.g., by sending it to a backend service
    // For now, we'll just navigate to the next screen
    navigation.navigate('FindService', { serviceType, problemDescription });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request {serviceType}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Describe your ${serviceType} request`}
        value={problemDescription}
        onChangeText={setProblemDescription}
      />
      <Button title="Find Nearest Service" onPress={handleSubmit} />
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
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default RequestFormScreen;
