/**
 * @format
 */

import 'reflect-metadata';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';
import { Navigation } from 'react-native-navigation';
import { Home } from '@containers';
import { Detail } from 'src/presentation/container/authorized/detail/Detail.view';



AppRegistry.registerComponent("Yakitori", () => App);
// Navigation.registerComponent(name, () => App);
// Navigation.registerComponent('Home', () => Home);
// Navigation.registerComponent('Detail', () => Detail);

// Navigation.events().registerAppLaunchedListener(() => {
// Navigation.setRoot({
//     root: {
//         stack: {
//             children: [
//                 {
//                     component: {
//                         name
//                     }
//                 }
//             ]
//         }
//     }
// })
// });

// Navigation.options = {
//     topBar: 
// }

