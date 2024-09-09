import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

// Replace with the path to your logo and background images
const logoImage = require('./images/settingB.png');
const backgroundImage = require('./images/repair.jpeg'); // Add your background image here

const HomeScreen = () => {
  const nav = useNavigation();

 
  const handleRefresh = () => {
    nav.reset({
      index: 0,
      routes: [{ name: 'Splash' }], // Navigate to SplashScreen
    });
    // Set a timeout to navigate back to the Home screen after loading
    setTimeout(() => {
      nav.replace('Home');
    }, 3000); // 3 seconds timeout, adjust if needed
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleRefresh}>
            <Image source={logoImage} style={styles.logo} />
          </TouchableOpacity>
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
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => nav.navigate('Home')}>
            <Icon name="home" size={30} color="#007BFF" />
          </TouchableOpacity>
          {/* Add more navigation icons as needed */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire screen
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
    position: 'relative',
    bottom: 30, 
    right: 30,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    flex: 1,
    fontWeight: 'condensed'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  },
});

export default HomeScreen;
