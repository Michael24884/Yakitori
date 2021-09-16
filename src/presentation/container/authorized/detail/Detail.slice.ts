import { SimklDetailModel } from '@data';
import { HotReduxComposer } from '@hocs';

import {createAction, createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import { SimklMockDetailData } from '../../../../mocks/SimklMockDetailData';
import { hotDetailEpic } from './Detail.epic';
import { DetailActions, DetailSelector, DetailState} from './types';

export const INITIAL_STATE: DetailState = {
  //During development, please use the mock data to prevent useless fetching from SIMKL servers on every customization renders :)
 simklData: SimklMockDetailData,
 //simklData: undefined,
 isLoadingSimklData: true,
};

export type DetailSlice = Slice;

export const hotDetailRedux: HotReduxComposer<
DetailActions,
DetailSelector
> = (id) => {
  const fetchSimklData = createAction<number>(`fetchData/${id}`);
  const slice = createSlice({
    name: 'Detail',
    initialState: INITIAL_STATE,
    reducers: {
      
      initSimklData: (state) => state,
      setSimklData: (state, {payload} : PayloadAction<SimklDetailModel>) => Object.assign(state, {
        simklData: payload,
        isLoadingSimklData: false,
      }),
    },
  });
  const selector: DetailSelector = (state) => {
    return state[id] ?? INITIAL_STATE;
  }

  const actions: DetailActions = {
    fetchData: fetchSimklData,
    ...slice.actions,
  }

  return {
    reducer: slice.reducer,
    actions,
    selector,
    epic: hotDetailEpic(actions),
  }
}

