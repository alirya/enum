import Type from '../../dist/boolean/enum.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA = 'DATA',
    VALUE = 'VALUE',
}

it(`compiler compatible`,function() {

    const argument : unknown = Enumerate.DATA;

    if(Type(argument, Enumerate)) {

        const result : Enumerate = argument;

    } else {

        // @ts-expect-error
        const result : Enumerate = argument;
    }

});

describe('valid', () => {

    it('enum value', () => {

        expect(Type<typeof Enumerate>(Enumerate.DATA, Enumerate)).toBe(true);
    });

    it('string', () => {

        expect(Type<typeof Enumerate>('VALUE', Enumerate)).toBe(true);
    });

});

describe('invalid', () => {

    it('string', () => {

        expect(Type<typeof Enumerate>('NON_VALUE', Enumerate)).toBe(false);
    });

});

