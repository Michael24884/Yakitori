import {container} from 'tsyringe';
import {CombineAuthenticationRepository, SimklRepository} from '@data';
import {AppDependencies} from './type';

export function registerRepositoryDependencies() {
  container.register(AppDependencies.AuthenticationRepository, {
    useClass: CombineAuthenticationRepository,
  });

  container.register('SimklRepository', {
    useClass: SimklRepository,
  });
}
