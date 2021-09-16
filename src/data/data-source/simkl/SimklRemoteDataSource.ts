import { SimklRemoteProvider } from "@core";
import { SimklDetailModel, SimklHomeItemModels, SimklItemModels } from "@data";
import { map, Observable } from "rxjs";
import { inject, injectable } from "tsyringe";

export interface RemoteSimklDataSource {
    getLatestPremeries(): Observable<SimklItemModels[]>;
    getTopAired(): Observable<SimklHomeItemModels[]>;
    getAllTimeBest(): Observable<SimklItemModels[]>;
    getAllTimeBestRating(): Observable<SimklItemModels[]>;
    getDetailData(id: number): Observable<SimklDetailModel>;
}


@injectable()
export class ApiSimlkDataSource implements RemoteSimklDataSource {
    
    constructor(
        @inject('SimklApiProvider')
        private readonly simklProvider: SimklRemoteProvider,
    ) {
    }


    getLatestPremeries(): Observable<SimklItemModels[]> {
        
        return new Observable((subs) => {
            this.simklProvider.get<SimklItemModels[]>('/anime/premieres/new')
            .then((newD) => {
                subs.next(newD.data)
                subs.complete();
            })
            .catch((e) => subs.error(e));
        });
    }



    getTopAired(): Observable<SimklHomeItemModels[]> {
        return new Observable((sub) => {
            this.simklProvider.get('/anime')
            .then((json) => {
                const data = (json.data as any)['top_aired_fanarts']
                sub.next(data);
                sub.complete();
            })
            .catch((e) => {
                sub.error(e);
            })
        });
    }

    getAllTimeBest(): Observable<SimklItemModels[]> {
        return new Observable((sub) => {
            this.simklProvider.get<SimklItemModels[]>('/anime/best/watched')
            .then((json) => {
                sub.next(json.data);
                sub.complete();
            })
            .catch((e) => sub.error(e));
        })
    }

    getAllTimeBestRating(): Observable<SimklItemModels[]> {
        return new Observable((sub) => {
            this.simklProvider.get<SimklItemModels[]>('/anime/best/voted')
            .then((json) => {
                sub.next(json.data);
                sub.complete();
            })
            .catch((e) => sub.error(e));
        })
    }

    getDetailData(id: number): Observable<SimklDetailModel> {
        return new Observable((sub) => {
            this.simklProvider.get<SimklDetailModel>(`/anime/${id}?extended=full`)
            .then((json) => {
                sub.next(json.data);
                sub.complete();
            })
        });
    }
}