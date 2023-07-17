import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import { Ionicons } from "@expo/vector-icons";
import ExpenseState from "./dummy-data";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExpenseOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#0E2954" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: "#0E2954" },
        tabBarActiveTintColor: "#F15A59",
        headerRight: () => {
          return (
            <Ionicons
              name="add-circle"
              onPress={() => {
                navigation.navigate("ManageExpense", { id: 1 });
              }}
              size={32}
              color="white"
              style={{ marginRight: 5, marginTop: 5 }}
            />
          );
        },
      })}
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
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <ExpenseState>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0E2954" },
            headerTintColor: "white",
            headerTitleAlign: "center",
            tabBarActiveTintColor: "white",
            tabBarStyle: { backgroundColor: "#0E2954" },
            tabBarActiveTintColor: "#F15A59",
          }}
          cardStyle={{
            backgroundColor: "#146C94",
          }}
        >
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              title: "Manage Expenses",
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </ExpenseState>
    </NavigationContainer>
  );
}
