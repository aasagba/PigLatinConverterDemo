/*jshint esversion: 6 */
import pigLatinConverter from './pigLatinConverter';

describe('Pig Latin converter: ', () => {
    let $ctrl,
        $scope,
        $componentController,
        input = 'Pig Eat';

    beforeEach(() => {
        angular.mock.module('app.components.pigLatinConverterComponent');
        inject((_$componentController_, $rootScope) => {
            $componentController = _$componentController_;
            $scope = $rootScope.$new();
        });
        $ctrl = $componentController('pigLatinConverter', $scope, {

        });
        $scope.$digest();
        $ctrl.$onInit();
        $ctrl.input = input + '';
    });

    beforeEach(() => {
        $ctrl.doConversion();
    });

    it('it should accept words', () => {
        expect($ctrl.input).toBeDefined();
        expect($ctrl.input).toEqual(input);
    });

    it('it should convert the words into Pig Latin', () => {
        expect($ctrl.output).toEqual('igpay Eatsay');
    });

    it('it should store the input in history', () => {
        expect($ctrl.history.length).toEqual(1);
        expect($ctrl.history).toEqual(['igpay Eatsay']);
    });
    it('it should reset the current input after it\'s stored', () => {
        expect($ctrl.out.length).toEqual(0);
    });

    it('it should check if first letter of word is vowel or consonant', () => {
        expect($ctrl.checkLetterPattern('p')).toEqual('consonant');
        expect($ctrl.checkLetterPattern('a')).toEqual('vowel');
    });

    it('it should output the Pig Latin version of the Word', () => {
        expect($ctrl.output).toEqual('igpay Eatsay');
    });

    describe('History: ', () => {
        beforeEach(() => {
            for(let i = 0; i<4;i++) {
                $ctrl.doConversion();
            }
        });

        it('it should Keep a track of the history of words/sentences and also display these', () => {
            expect($ctrl.history.length).toEqual(5);
        });
    });
});
