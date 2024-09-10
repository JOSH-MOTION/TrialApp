import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ServiceSelectionScreen from './ServiceSelectionScreen';
import LocationSelectionScreen from './LocationSelectionScreen';
import ServiceRegistrationScreen from './ServiceRegistrationScreen';
import FindServiceScreen from './FindServiceScreen';
import SplashScreen from "./SplashScreen";
import MainContainer from './navigation/MainContainer';

const Stack = createStackNavigator()

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds timeout

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          // Show SplashScreen while loading is true
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiceSelection"
              component={ServiceSelectionScreen}
            />
            <Stack.Screen
              name="LocationSelection"
              component={LocationSelectionScreen}
            />
            <Stack.Screen
              name="Register"
              component={ServiceRegistrationScreen}
            />
            <Stack.Screen
              name="FindService"
              component={FindServiceScreen}
            />
            <Stack.Screen
            name="MainContainer"
            component={MainContainer} // Use the bottom tab navigator here
          />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
