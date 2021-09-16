import {container} from 'tsyringe';
import {
  KeyChainAuthenticationDataSource,
  ApiAuthenticationDataSource,
  ApiSimlkDataSource,
} from '@data';
import {SignInUseCase} from '@domain';
import {BearerAuthorizationRxAxiosProvider, BuildConfig, SimklRemoteProvider} from '@core';
import {AppDependencies} from './type';

export function registerDataDependencies() {
  container.register(AppDependencies.ApiProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: BuildConfig.SimklApiUrl,
    }),
  });

  container.register("SimklApiProvider", {
    useValue: new SimklRemoteProvider(BuildConfig.SimklClientId),
  });

  container.register("RemoteSimklDataSource", {
    useClass: ApiSimlkDataSource,
  });

  container.register(AppDependencies.LocalAuthenticationDataSource, {
    useClass: KeyChainAuthenticationDataSource,
  });

  container.register(AppDependencies.RemoteAuthenticationDataSource, {
    useClass: ApiAuthenticationDataSource,
  });

  container.register(AppDependencies.SignInUseCase, {
    useClass: SignInUseCase,
  });
}
