import {combineEpics, Epic} from 'redux-observable';
import { filter, map, switchMap } from 'rxjs/operators';
import {} from 'rxjs';

import { homeSlice} from './Home.slice';
import { HomeState} from './types';
import { Action } from 'redux';
import { container } from 'tsyringe';
import { SimklRepository } from '@data';


const {
    actions: {
        initData,
        setPremiere,
        setPoster,
        setBest,
        setBestRating,
    }
} = homeSlice;


const initPremiere$: Epic<Action, Action, {home: HomeState}> = (action$) => action$
.pipe(
    filter(initData.match),
    switchMap(() => {
        
        const repo = container.resolve<SimklRepository>('SimklRepository');
        return repo.getPremeiere().pipe(
            map((data) => {
                return setPremiere(data);
            })
        );
    }),
);

const initPosters$: Epic<Action, Action, {home: HomeState}> = (action$) => action$
.pipe(
    filter(initData.match),
    switchMap(() => {
        
        const repo = container.resolve<SimklRepository>('SimklRepository');
        return repo.getPosters().pipe(
            map((data) => {
                return setPoster(data);
            })
        )
    }),
)


const initBest$: Epic<Action, Action, {home: HomeState}> = (action$) => action$
.pipe(
    filter(initData.match),
    switchMap(() => {
        const repo = container.resolve<SimklRepository>('SimklRepository');
        return repo.getAllTimeBest().pipe(
            map((data) => {
                return setBest(data);
            })
        )
    }),  
)

const initBestRating$: Epic<Action, Action, {home: HomeState}> = (action$) => action$
.pipe(
    filter(initData.match),
    switchMap(() => {
        const repo = container.resolve<SimklRepository>('SimklRepository');
        return repo.getAllTimeBestRating().pipe(
            map((data) => {
                return setBestRating(data);
            })
        )
    }),  
)


export const homeEpic = combineEpics(initPremiere$, initPosters$, initBest$, initBestRating$ );
