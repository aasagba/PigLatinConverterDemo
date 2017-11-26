/*jshint esversion: 6 */
import pigLatinConverter from './pigLatinConverter';

describe('Product Feature Modal: ', () => {
    let $ctrl,
        $scope,
        $componentController,
        input = ['Pig'];

    beforeEach(() => {
        angular.mock.module('app.components.pigLatinConverterComponent');
        inject((_$componentController_, $rootScope) => {
            $componentController = _$componentController_;
            $scope = $rootScope.$new();
        });
        $ctrl = $componentController('pigLatinConverter', $scope, {
        });
        $ctrl.$onInit();
        $ctrl.getInput(input);
    });

    it('it should accept words', () => {
        expect($ctrl.input).toBeDefined();
        expect($ctrl.input).toEqual(input);

    });

    it('it should convert the words into Pig Latin', () => {
        expect($ctrl.checkLetterPattern()).toBeDefined();
        expect($ctrl.checkLetterPattern()).toEqual('consonant');
    });

    it('it should output the Pig Latin version of the Word', () => {
        expect($ctrl.convertToPigLatin()).toBeDefined();
        expect($ctrl.convertToPigLatin()).toEqual('“igpay”');
    });

    it('it should Keep a track of the history of the last 10 words/sentences and also display these', () => {

    });
});
