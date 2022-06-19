import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

import COLORS from './constants/colors'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
