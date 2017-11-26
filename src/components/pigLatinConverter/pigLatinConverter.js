/*jshint esversion: 6 */
import template from './pigLatinConverter.html';

class pigLatinConverterController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.title = 'test title';
    }
}

let pigLatinConverterComponent = {
    template,
    bindings: {
    },
    controller: pigLatinConverterController,
};

export default angular
    .module('app.components.pigLatinConverterComponent', [])
    .component('pigLatinConverter', pigLatinConverterComponent)
    .name;