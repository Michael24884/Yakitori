import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {AuthorizedStoryboardParamList} from '@storyboards';
import {RootStoreState} from '@shared-state';
import { SimklDetailModel } from '@data';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';
import { ReduxComposeComponentProps } from '@hocs';

export type DetailNavigationProps = StackNavigationProp<
  AuthorizedStoryboardParamList,
  'Detail'
>;

export type DetailRouteProp = RouteProp<AuthorizedStoryboardParamList, 'Detail'>;

export interface DetailProps extends ReduxComposeComponentProps<DetailActions, DetailSelector> {
  navigation: DetailNavigationProps;
  route: DetailRouteProp;
  actions: DetailActions;
};

export type DetailState = {
  simklData: SimklDetailModel | undefined,
  isLoadingSimklData: boolean,
};

export type DetailSelector = Selector<
StoreStateWithDetail,
DetailReduxSelectionState>;

export type DetailActions = {
  fetchData: ActionCreatorWithPayload<number>;
  setSimklData: ActionCreatorWithPayload<SimklDetailModel>;
}

export type StoreStateWithDetail = RootStoreState & {
  Detail?: DetailState;
};

export type DetailReduxSelectionState = DetailState & {};
