import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense'
import AllExpense from './screens/AllExpense'
const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const ExpenseOverview=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name='ManageExpense' component={RecentExpense}/>
      <Tab.Screen name='AllExpense' component={AllExpense}/>
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
