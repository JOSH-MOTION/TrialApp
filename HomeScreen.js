import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logoImage = require('./images/settingW.png'); // Replace with the path to your logo image
const backgroundImage = require('./images/repair2.jpeg'); // Replace with the path to your background image

const HomeScreen = () => {
  const nav = useNavigation();

  const handleRefresh = () => {
    // Navigate to the SplashScreen or reload logic
    nav.navigate('Splash');
    
    // Simulate the loading and refresh the Home screen after 3 seconds
    setTimeout(() => {
      nav.replace('Home');
    }, 3000);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Add a semi-transparent overlay to dim the background */}
      <View style={styles.overlay} />

      {/* Wrap your content in ScrollView to enable scrolling */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleRefresh}>
              <Image source={logoImage} style={styles.logo} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.title}>Welcome to the Service Finder App</Text>
          </View>

          <View style={styles.navBar}>
            <Button
              title="Choose Service"
              onPress={() => nav.navigate('ServiceSelection')}
            />
            <Button
              title="Set Location"
              onPress={() => nav.navigate('LocationSelection')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensure the background image covers the entire screen
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fill the entire background
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with 50% opacity for dimming
  },
  scrollContainer: {
    flexGrow: 1, // Makes the ScrollView content take full available space
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 44,
    marginLeft: 10,
    flex: 1,
    fontWeight: '900',
    textAlign: 'center',
    color: '#fff', // White text color to stand out against dimmed background
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%',
  },
});

export default HomeScreen;
