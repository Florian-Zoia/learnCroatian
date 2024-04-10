import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Vocabulary from './app/screens/vocabulary';
import CategoryPicker from './app/screens/categoryPicker';
import ChatScreen1 from './app/screens/ChatScreen1';
import Index from './app/screens';
import Alphabet_pronounciation from './app/screens/alphabet_pronounciation';
import  Dialog  from './app/screens/dialog';

// Initialize the Stack navigator
const Stack = createNativeStackNavigator();
 
function StackNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="ChatScreen" component={ChatScreen1} />  */}
        <Stack.Screen name="Index" component={Index} /> 
        <Stack.Screen name="Dialog" component={Dialog} />
        <Stack.Screen name="alphabet_pronounciation" component={Alphabet_pronounciation} />
        <Stack.Screen name="CategoryPicker" component={CategoryPicker} />
        <Stack.Screen name="Vocabulary" component={Vocabulary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation; 