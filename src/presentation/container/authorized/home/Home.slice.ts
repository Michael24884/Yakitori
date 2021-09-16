import { SimklHomeItemModels, SimklItemModels } from '@data';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {} from '@reduxjs/toolkit';
import { HomeState} from './types';

export const INITIAL_STATE: HomeState = {
 premiere: [],
 posters: [],
 best: [],
 bestRating: [],
};

export const homeSlice = createSlice({
  name: 'Home',
  initialState: INITIAL_STATE,
  reducers: {
    initData: (state) => state, 
      setPremiere: (state, {payload}: PayloadAction<SimklItemModels[]>) => Object.assign(state, {
        premiere: payload,
      }),
      setPoster: (state, {payload} : PayloadAction<SimklHomeItemModels[]>) => Object.assign(state, {
        posters: payload,
      }),
      setBest: (state, {payload}: PayloadAction<SimklItemModels[]>) => Object.assign(state, {
        best: payload,
      }),
      setBestRating: (state, {payload}: PayloadAction<SimklItemModels[]>) => Object.assign(state, {
        bestRating: payload,
      }),
  },
});
