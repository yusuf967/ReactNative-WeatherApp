/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './pages/App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => App);
