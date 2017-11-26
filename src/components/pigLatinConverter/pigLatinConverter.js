/*jshint esversion: 6 */
import template from './pigLatinConverter.html';

class pigLatinConverterController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.title = 'test title';
        this.input = '';
        this.output = '';
        this.history = [];
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    doConversion () {
        let words = this.checkInput();

        // loop through array of words and check 1st letters
        words.forEach((word) => {
            let l = word.slice(0,1);
            // check pattern
            let pattern = this.checkLetterPattern(l);
            pattern === 'vowel' ? this.doVowelConversion(pattern) : this.doConsonantConversion(pattern);
        });
    }

    checkInput () {
        // get words and split into array of words
        return this.input.split(' ');
    }

    checkLetterPattern (letter) {
        letter = letter.toLowerCase();
        let pattern = this.vowels.includes(letter) ? 'vowel' : 'consonant';

        return pattern;
    }

    doVowelConversion(pattern) {
        console.log(`doing ${pattern} conversion`);
    }

    doConsonantConversion(pattern) {
        console.log(`doing ${pattern} conversion`);
    }

    convertToPigLatin (pattern) {

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