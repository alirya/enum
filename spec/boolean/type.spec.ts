import Type from "../../dist/boolean/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('same data', () => {

    enum Enumerate {
        DATA = 'DATA',
        VALUE = 'VALUE',
    }


    it("enum value", () => {

        expect(Type<typeof Enumerate>(Enumerate.DATA, Enumerate)).toBe(true);
    });

    it("string", () => {

        expect(Type<typeof Enumerate>('VALUE', Enumerate)).toBe(true);
    });

});

