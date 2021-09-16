import React from 'react';
import {Epic} from 'redux-observable';
import {Reducer} from 'redux';
import {container} from 'tsyringe';
import uuid from 'react-native-uuid';

import {StoreContainer} from '@shared-state';

export type ReduxCompose<Actions, Selector> = {
  reducer: Reducer;
  actions: Actions;
  selector: Selector;
  epic: Epic;
};

export type HotReduxComposer<Actions, Selector> = (
  name: string,
) => ReduxCompose<Actions, Selector>;

export interface ReduxComposeComponentProps<Actions, Selector> {
  actions: Actions;
  selector: Selector;
  route: any;
}

export const withHotEnhanceRedux = <Actions, Selector>(
  composer: HotReduxComposer<Actions, Selector>,
) => (
  Component: React.FC<ReduxComposeComponentProps<Actions, Selector>> | any,
): React.ComponentType => {
  return class WithHotRedux extends React.PureComponent {
    reduxCompose: ReduxCompose<Actions, Selector>;
    reduxKey: string;
    constructor(props: any) {
      super(props);
      const {reducerManager, addEpic} = container.resolve<StoreContainer>(
        'StoreContainer',
      );
      this.reduxKey = uuid.v4();
      this.reduxCompose = composer(this.reduxKey);
      reducerManager.add(this.reduxKey, this.reduxCompose.reducer);
      addEpic(this.reduxCompose.epic);
    }

    componentWillUnmount() {
      const {reducerManager} = container.resolve<StoreContainer>(
        'StoreContainer',
      );
      reducerManager.remove(this.reduxKey);
    }

    render() {
      return (
        <Component
          {...this.props}
          actions={this.reduxCompose.actions}
          selector={this.reduxCompose.selector}
        />
      );
    }
  };
};
