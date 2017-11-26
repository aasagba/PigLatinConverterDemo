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
        this.out = [];
        this.history = [];
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    doConversion () {
        let words = this.checkInput();

        // loop through array of words and check 1st letters
        words.forEach((word) => {
            let letter = word.slice(0,1).toLowerCase();
            // check pattern
            let pattern = this.checkLetterPattern(letter);
            this.convertToPigLatin(pattern, word, letter);
        });

        console.log('output: ', this.out);
        this.output = this.out.join(" ");
    }

    checkInput () {
        // get words and split into array of words
        return this.input.split(' ');
    }

    checkLetterPattern (letter) {
        let pattern = this.vowels.includes(letter) ? 'vowel' : 'consonant';
        return pattern;
    }

    doVowelConversion(word) {
        // For words that begin with vowel sounds, one just adds 'way' to the end
        const vowelSuffix = 'say';
        console.log(`vowel converstion for word ${word}`);
        let converstion = word + vowelSuffix;
        this.out.push(converstion);
    }

    doConsonantConversion(word, letter) {
        // all letters before the initial vowel are placed at the end of the word sequence.
        console.log(`consonant converstion for word ${word}`);
        const consonantSuffix = 'ay';
        let converstion = word.slice(1) + letter + consonantSuffix;
        this.out.push(converstion);
    }

    convertToPigLatin (pattern, word, letter) {
        pattern === 'vowel' ? this.doVowelConversion(word) : this.doConsonantConversion(word, letter);
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