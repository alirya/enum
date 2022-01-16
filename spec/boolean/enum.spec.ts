import Type from '../../dist/boolean/enum';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA = 'DATA',
    VALUE = 'VALUE',
}

describe(`compiler compatible`,function() {

    let argument : unknown = Enumerate.DATA;

    if(Type(argument, Enumerate)) {

        let result : Enumerate = argument;

    } else {

        // @ts-expecerror
        let result : Enumerate = argument;
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

