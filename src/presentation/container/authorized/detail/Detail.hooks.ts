import React, { useCallback, useEffect } from 'react';
import {} from 'react-native';

import {useDispatch, useSelector, Selector} from 'react-redux';
import { INITIAL_STATE} from './Detail.slice';
import { DetailActions, DetailReduxSelectionState, DetailSelector, StoreStateWithDetail } from './types';

export const detailSelector: Selector<
  StoreStateWithDetail,
  DetailReduxSelectionState
> = ({ Detail = INITIAL_STATE}) => Detail;

export function useDetailModel(
  actions: DetailActions,
  detailSelector: DetailSelector,
  id: number,
  ) {
  const {
    isLoadingSimklData,
    simklData
  } = useSelector<
    StoreStateWithDetail,
     DetailReduxSelectionState
  >( detailSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    /* 
    Uncomment to fetch from SIMKL API [not recommended during customizing layouts] 
    */
    //dispatch(actions.fetchData(id));
  }, [dispatch, actions, id]);
  

  return {
    isLoadingSimklData,
    simklData
  };
}
