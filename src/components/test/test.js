/*jshint esversion: 6 */
import template from './test.html';

class testController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.title = 'test title';
    }
}

let testComponent = {
    template,
    bindings: {
    },
    controller: testController,
};

export default angular
    .module('app.components.testComponent', [])
    .component('testComponent', testComponent)
    .name;