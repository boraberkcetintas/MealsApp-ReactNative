import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#c72f20' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#eef5db' },
      drawerContentStyle: { backgroundColor: '#eef5db' },
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: '#c72f20',
    }}
  >
    <Drawer.Screen
      name='MealCategories'
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='home' />
      }}
    />
    <Drawer.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='star' />
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        {/* {<FavoritesContextProvider>} */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#c72f20' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#eef5db' },
              animation: 'slide_from_right'
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}
