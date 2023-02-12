import {EnumParameters} from '../../dist/assert/enum.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA = 'DATA',
    VALUE = 'VALUE',
}

it(`compiler compatible`,function() {

    const argument : unknown = Enumerate.DATA;
    EnumParameters(argument, Enumerate);
    const result : Enumerate = argument;

});

describe('valid', () => {

    it('enum value', () => {
        const value = Enumerate.DATA;
        EnumParameters<typeof Enumerate>(value, Enumerate);
        expect(value).toBe(Enumerate.DATA);
    });

    it('string', () => {
        const value = 'DATA';
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

