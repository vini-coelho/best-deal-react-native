import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

// import { TabBar } from '../components/TabBar';
import { Calculator } from '../screens/Calculator';

const Tabs = createBottomTabNavigator();

export function MainTabs() {
  const { colors } = useTheme();

  return(
    <Tabs.Navigator
      initialRouteName='Calculator'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main
      }}
    >
      <Tabs.Screen
        name='Calculator'
        component={Calculator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="balance-scale"
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}
