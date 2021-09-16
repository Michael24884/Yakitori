import {combineEpics, Epic} from 'redux-observable';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import {} from 'rxjs';

import { DetailActions, DetailState} from './types';
import { Action } from 'redux';
import { container } from 'tsyringe';
import { SimklRepository } from '@data';

export const hotDetailEpic = (actions: DetailActions): Epic => {
 const {
     fetchData,
     setSimklData
 } = actions;   

const initSimklDataEpic$: Epic = (action$) => action$
.pipe(
    filter(fetchData.match),
    switchMap((action) => {
        const repo = container.resolve<SimklRepository>('SimklRepository');
        return repo.getDetailData(action.payload)
        .pipe(
            map((data) => {
                return setSimklData(data)
            })
        )
    }),
);
return combineEpics(initSimklDataEpic$)
}
