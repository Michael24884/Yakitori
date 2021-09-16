import { RemoteSimklDataSource, SimklDetailModel, SimklHomeItemModels, SimklItemModels } from "@data";
import { Observable } from "rxjs";
import { inject, injectable } from "tsyringe";

@injectable()
export class SimklRepository {
    constructor(
        @inject('RemoteSimklDataSource')
        private readonly dataSource: RemoteSimklDataSource,
    ) {}


        getPremeiere(): Observable<SimklItemModels[]> {   
            return this.dataSource.getLatestPremeries();
        }

        getPosters(): Observable<SimklHomeItemModels[]> {
            return this.dataSource.getTopAired();
        }

        getAllTimeBest(): Observable<SimklItemModels[]> {
            return this.dataSource.getAllTimeBest();
        }

        getAllTimeBestRating(): Observable<SimklItemModels[]> {
            return this.dataSource.getAllTimeBestRating();
        }

        getDetailData(id: number): Observable<SimklDetailModel> {
            return this.dataSource.getDetailData(id);
        }

}