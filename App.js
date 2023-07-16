import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import { Ionicons } from "@expo/vector-icons";
import { DUMMY } from "./dummy-data";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExpenseOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0E2954" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: "#0E2954" },
        tabBarActiveTintColor: "#F15A59",
      }}
      sceneContainerStyle={{
        backgroundColor: "#146C94",
      }}
    >
      <Tab.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="hourglass-outline" color={color} size={size} />
            );
          },
        }}
        initialParams={{ DUMMY }}
      />
      <Tab.Screen
        name="AllExpense"
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" color={color} size={size} />;
          },
        }}
        initialParams={{ DUMMY }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="ExpenseOverview"
          component={ExpenseOverview}
          options={{ headerShown: false }}
          initialParams={{ dummy: DUMMY }}
        />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
