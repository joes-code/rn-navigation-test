import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text accessibilityLabel={'layer2'}>Layer 2</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text accessibilityLabel={'layer1'}>Layer 1</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        accessibilityLabel={'layer1Button'}
      />
    </View>
  );
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
    },
    {
      /* Other configuration remains unchanged */
    },
  ),
);
