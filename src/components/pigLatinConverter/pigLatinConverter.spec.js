import pigLatinConverter from './pigLatinConverter';

describe('Pig Latin Converter ', () => {

    let $ctrl, $scope, $componentController;

    beforeEach(() => {
        angular.mock.module(pigLatinConverter);
        inject((_$componentController_, $rootScope) => {
            $componentController = _$componentController_;
            $scope = $rootScope.$new();
        });
        $ctrl = $componentController('pigLatinConverterController', $scope, {
        });
    });

    it('it should accept words', () => {

    });

    it('it should convert the words into Pig Latin', () => {

    });

    it('it should output the Pig Latin version of the Word', () => {

    });

    it('it should Keep a track of the history of the last 10 words/sentences and also display these', () => {

    });

});