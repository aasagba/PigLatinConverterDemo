/*jshint esversion: 6 */
import template from './pigLatinConverter.html';

class pigLatinConverterController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.title = 'test title';
        this.input = '';
        this.words = [];
        this.history = [];
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    getInput (input) {

    }

    checkLetterPattern () {

    }

    convertToPigLatin () {

    }

    storeInputHistory () {

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