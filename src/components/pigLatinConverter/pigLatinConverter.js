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
        console.log("inputtt: ", this.input);
        var words = this.input.split(' ');
        // loop through array of words and check 1st letters
        this.processInput(words);
        // join converted array into string for UI
        this.handleConversion();
    }

    handleConversion () {
        this.output = this.out.join(" ");
        console.log('output..: ', this.output);
        this.addToHistory();
    }

    processInput (words) {
        console.log('weords: ', words);
        // get words and split into array of words
        words.forEach((word) => {
            let letter = word.slice(0,1).toLowerCase();
            // check pattern
            let pattern = this.checkLetterPattern(letter);
            this.convertToPigLatin(pattern, word, letter);
        });
    }

    checkLetterPattern (letter) {
        let pattern = this.vowels.includes(letter) ? 'vowel' : 'consonant';
        return pattern;
    }

    doVowelConversion(word) {
        // For words that begin with vowel sounds, one just adds 'way' to the end
        console.log(`vowel conversion for word ${word}`);
        const vowelSuffix = 'say';
        let conversion = word + vowelSuffix;
        this.out.push(conversion);
    }

    doConsonantConversion(word, letter) {
        // all letters before the initial vowel are placed at the end of the word sequence.
        console.log(`consonant conversion for word ${word}`);
        const consonantSuffix = 'ay';
        let conversion = word.slice(1) + letter + consonantSuffix;
        this.out.push(conversion);
        console.log('out: ', this.out);
    }

    convertToPigLatin (pattern, word, letter) {
        pattern === 'vowel' ? this.doVowelConversion(word) : this.doConsonantConversion(word, letter);
    }

    addToHistory () {
        this.history.unshift(this.output);
        console.log('history: ' + this.history);
        this.out.length = 0;
        console.log('output: ', this.out);
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