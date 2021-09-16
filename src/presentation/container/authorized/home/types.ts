import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {ParamsType} from '@storyboards';
import {RootStoreState} from '@shared-state';
import { SimklHomeItemModels, SimklItemModels } from '@data';

export type HomeNavigationProps = StackNavigationProp<
  ParamsType,
  'Home'
>;

export type HomeRouteProp = RouteProp<ParamsType, ' Home'>;

export type HomeProps = {
  navigation: HomeNavigationProps;
  route: HomeRouteProp;
};

export type HomeState = {
  premiere: Array<SimklItemModels>,
  posters: Array<SimklHomeItemModels>,
  best: Array<SimklItemModels>,
  bestRating: Array<SimklItemModels>,
};

export type StoreStateWithHome = RootStoreState & {
  Home?: HomeState;
};

export type HomeReduxSelectionState = HomeState & {};
