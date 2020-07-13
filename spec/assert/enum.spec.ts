import Type from "../../dist/assert/enum";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA = 'DATA',
    VALUE = 'VALUE',
}

describe(`compiler compatible`,function() {

    let argument : unknown = Enumerate.DATA;
    Type(argument, Enumerate)
    let result : Enumerate = argument;

});

describe('valid', () => {

    it("enum value", () => {
        let value = Enumerate.DATA;
        Type<typeof Enumerate>(value, Enumerate)
        expect(value).toBe(Enumerate.DATA);
    });

    it("string", () => {
        let value = 'DATA';
        Type<typeof Enumerate>(value, Enumerate)
        expect(value).toBe(Enumerate.DATA);
    });

});

describe('invalid', () => {

    it("string", () => {

        try {
            Type<typeof Enumerate>('NON_VALUE', Enumerate)
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

