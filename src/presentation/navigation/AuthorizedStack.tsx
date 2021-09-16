import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AuthorizedBottomParamList, AuthorizedStoryboardParamList} from '../storyboard/Authorized.storyboard';
import { Home } from '@containers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Detail } from '../container/authorized/detail/Detail.view';

const Stack = createStackNavigator<AuthorizedStoryboardParamList>();
const Tabs = createBottomTabNavigator<AuthorizedBottomParamList>();


const StackNavigator = () => {
  return <Stack.Navigator>
  <Stack.Screen name={'Home'} component={Home} />
  <Stack.Screen name={'Detail'} component={Detail} />
</Stack.Navigator>
}


export const AuthorizedNavigator: React.FC = () => {
  return <Tabs.Navigator>
    <Tabs.Screen component={StackNavigator} name={"Discover"} options={{
      headerShown: false,
      tabBarIcon: ({focused, color, size}) => <Icon name="home" size={size} color={color} />,
    }} />
  </Tabs.Navigator>;
};
