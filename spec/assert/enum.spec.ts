import {EnumParameters} from '../../dist/assert/enum.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA = 'DATA',
    VALUE = 'VALUE',
}

it(`compiler compatible`,function() {

    let argument : unknown = Enumerate.DATA;
    EnumParameters(argument, Enumerate);
    let result : Enumerate = argument;

});

describe('valid', () => {

    it('enum value', () => {
        let value = Enumerate.DATA;
        EnumParameters<typeof Enumerate>(value, Enumerate);
        expect(value).toBe(Enumerate.DATA);
    });

    it('string', () => {
        let value = 'DATA';
        EnumParameters<typeof Enumerate>(value, Enumerate);
        expect(value).toBe(Enumerate.DATA);
    });

});

describe('invalid', () => {

    it('string', () => {

        try {
            EnumParameters<typeof Enumerate>('NON_VALUE', Enumerate);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

