/*jshint esversion: 6 */

// load styles
import styles from './css/app.scss';
// load component modules
import './components';
// load third party modules
import 'jquery';
import 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

const appModule = angular
    .module('myApp', [
        'ui.router',
        'app.components.pigLatinConverterComponent'
    ]);

export default appModule;
