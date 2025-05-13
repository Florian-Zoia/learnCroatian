import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Vocabulary from './app/screens/vocabulary';
import CategoryPicker from './app/screens/categoryPicker';
import ChatScreen1 from './app/screens/ChatScreen1';
import Index from './app/screens';
import Alphabet_pronounciation from './app/screens/alphabet_pronounciation';
import Dialog from './app/screens/dialog';
import Abfrage from './app/screens/Abfrage';
import AddNew from './app/screens/addNew';
import AddDB from './app/screens/add_DB';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Initialize the Stack navigator
const Stack = createNativeStackNavigator();
const LernStack = createNativeStackNavigator();
const TestStack = createNativeStackNavigator();
const NeueVocStack = createNativeStackNavigator();

// Initialize the Tab navigator
const Tab = createBottomTabNavigator();


function LernStackNavigation() {
  return (
    <LernStack.Navigator
      screenOptions={{ headerShown: false }}>
      <LernStack.Screen name="CategoryPicker" component={CategoryPicker} />
      <LernStack.Screen name="Abfrage" component={Abfrage} />
      <LernStack.Screen name="Index" component={Index} />
      <LernStack.Screen name="Vocabulary" component={Vocabulary} />
      <LernStack.Screen name="alphabet_pronounciation" component={Alphabet_pronounciation} />
    </LernStack.Navigator>
  )
}

function TestStackNavigation() {
  return (
    <TestStack.Navigator
      screenOptions={{ headerShown: false }}>
      <TestStack.Screen name="Index" component={Index} />
      <TestStack.Screen name="Vocabulary" component={Vocabulary} />
      <TestStack.Screen name="alphabet_pronounciation" component={Alphabet_pronounciation} />
    </TestStack.Navigator>
  )
}

function NeueVocStackNavigation() {
  return (
    <NeueVocStack.Navigator
      screenOptions={{ headerShown: false }}>
      <NeueVocStack.Screen name="AddNew" component={AddNew} />
    </NeueVocStack.Navigator>
  )
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#B3B3B3',
        tabBarInactiveBackgroundColor: '#181818',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#181818'
        }
      }}>
      <Tab.Screen
        name="Lernen"
        component={LernStackNavigation}
        options={{
          tabBarLabel: 'Lernen'
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestStackNavigation}
        options={{
          tabBarLabel: 'Test'
        }}
      />
      <Tab.Screen
        name="NeueVoc"
        component={NeueVocStackNavigation}
        options={{
          tabBarLabel: 'Neue Vokabel'
        }}
      />
    </Tab.Navigator>
  )
}

// function StackNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="AddDB" component={AddDB} />
//         <Stack.Screen name="AddNew" component={AddNew} />
//         <Stack.Screen name="Abfrage" component={Abfrage} />
//         <Stack.Screen name="Index" component={Index} />
//         <Stack.Screen name="Dialog" component={Dialog} />
//         <Stack.Screen name="alphabet_pronounciation" component={Alphabet_pronounciation} />
//         {/* <Stack.Screen name="CategoryPicker" component={CategoryPicker} /> */}
//         <Stack.Screen name="Vocabulary" component={Vocabulary} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}; 