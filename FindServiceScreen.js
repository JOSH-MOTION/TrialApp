import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Button, ActivityIndicator } from 'react-native';

const FindServiceScreen = ({ route }) => {
  const { location } = route.params; // Get the entered location from navigation params
  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Fetch providers based on the entered location
    // Replace with actual API call
    // Example: fetch(`https://your-backend-api.com/providers?location=${encodeURIComponent(location)}`)
    setTimeout(() => {
      setProviders([
        { id: 1, name: 'John Doe', latitude: 5.6037, longitude: -0.1870, serviceType: 'Mechanic' },
        // Add more providers as needed
      ]);
      setLoading(false);
    }, 2000); // Simulate a network request
  }, [location]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 5.6037, // Default to a central location
          longitude: -0.1870,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {providers.map(provider => (
          <Marker
            key={provider.id}
            coordinate={{ latitude: provider.latitude, longitude: provider.longitude }}
            title={provider.name}
            description={provider.serviceType}
          />
        ))}
      </MapView>
      <Button title="Request Service" onPress={() => {/* Add functionality to request service */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default FindServiceScreen;
