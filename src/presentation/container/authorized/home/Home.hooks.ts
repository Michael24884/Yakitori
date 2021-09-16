import React, { useCallback, useEffect } from 'react';
import {} from 'react-native';

import {useDispatch, useSelector, Selector} from 'react-redux';
import { homeSlice, INITIAL_STATE} from './Home.slice';
import { HomeReduxSelectionState, StoreStateWithHome } from './types';

export const homeSelector: Selector<
  StoreStateWithHome,
  HomeReduxSelectionState
> = ({ Home = INITIAL_STATE}) => Home;

const {
  actions: {
    initData,
    
  },
} = homeSlice;

export function useHomeModel() {
  const { premiere, posters, best, bestRating } = useSelector<
    StoreStateWithHome,
     HomeReduxSelectionState
  >( homeSelector);
  const dispatch = useDispatch();

  const initPremeireLoader = useCallback(() => dispatch(initData()), [dispatch]);

  useEffect(() => {
    initPremeireLoader();
  }, [initPremeireLoader]);
  

  return { premiere, posters, best, bestRating };
}
