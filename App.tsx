import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainComponent from './components/MainComponent';
import BlankPage from './components/BlankPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Health"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = {
              icon: require('./assets/Calendar.png'),
            };
            if (route.name === 'My Plan') {
              iconName = {
                icon: require('./assets/Calendar.png'),
              };
            } else if (route.name === 'Insights') {
              iconName = {
                icon: require('./assets/Insights.png'),
              };
            } else if (route.name === 'Health') {
              iconName = {
                icon: require('./assets/Health.png'),
              };
            } else if (route.name === 'Awards') {
              iconName = {
                icon: require('./assets/Awards.png'),
              };
            } else
              iconName = {
                icon: require('./assets/Chatting.png'),
              };
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: focused ? 'black' : '',
                  borderBottomWidth: focused ? 4 : 0,
                }}
              >
                <Image source={iconName.icon} />
                <Text>{route.name}</Text>
              </View>
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 94,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginBottom: 10,
          },
        })}
      >
        <Tab.Screen name="My Plan" component={BlankPage} />
        <Tab.Screen name="Insights" component={BlankPage} />
        <Tab.Screen name="Health" component={MainComponent} />
        <Tab.Screen name="Awards" component={BlankPage} />
        <Tab.Screen name="Chatting" component={BlankPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
