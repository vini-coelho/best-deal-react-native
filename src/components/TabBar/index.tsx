import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;


        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { });
          }
        };

        const renderIcon = options.tabBarIcon

        const props = {
          focused: isFocused,
          color: isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor,
          size: 25
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {renderIcon(props)}
            <Text style={{ color: isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
