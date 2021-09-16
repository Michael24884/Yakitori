import { BuildConfig, RemoteException, RxRemoteProvider } from "@core";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable, Observer } from "rxjs";


// export class SimklRemoteProviderException extends RemoteException<AxiosError> {
//   constructor(error : any) {
//     super(error);
//   }
// };

export class SimklRemoteProvider implements RxRemoteProvider {

    private readonly axiosInstance;

    
    constructor(private readonly clientID: string) {
        this.axiosInstance = axios.create({
            baseURL: BuildConfig.SimklApiUrl,
            headers: {
                'simkl-api-key': this.clientID,
            }
        });
        
    }

       async request<T>(requestConfig: AxiosRequestConfig) {

        return await this.axiosInstance.request(requestConfig);

       
      }
    
    post<T>(url: string, data: any): Observable<AxiosResponse<T>> {
        console.log('opso')
       throw new Error()
    }
    
    get<T>(url: string): Promise<AxiosResponse<T>> {
        return this.request({
            method: 'GET',
            url,
        });
    }
    put<T>(url: string, data: any): Observable<AxiosResponse<T>> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string): Observable<AxiosResponse<T>> {
        throw new Error("Method not implemented.");
    }
    
}