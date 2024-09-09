// OptionsScreen.js
import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const OptionsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request or data fetch
    setTimeout(() => {
      setRefreshing(false); // Stop refreshing after data is loaded
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#007BFF']} // Adjust color as needed
        />
      }
    >
      <View style={styles.content}>
        <Text style={styles.title}>What type of help do you need?</Text>
        <Button
          title="Mechanic"
          onPress={() => navigation.navigate('RequestForm', { serviceType: 'Mechanic' })}
        />
        <Button
          title="Hairdresser"
          onPress={() => navigation.navigate('RequestForm', { serviceType: 'Hairdresser' })}
        />
        <Button
          title="Others"
          onPress={() => navigation.navigate('RequestForm', { serviceType: 'Others' })}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default OptionsScreen;
