import Property from "../../dist/boolean/propery";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('same data', () => {

    enum Enumerate {
        DATA = 'DATA',
        VALUE = 'VALUE',
    }

    let object = {
        DATA : 1,
        VALUE : 2,
    };

    it("valid", () => {

        expect(Property<Enumerate, string>(object, Enumerate, (e) : e is string=>true)).toBe(true);
    });

    it("invalid with validator", () => {

        expect(Property<Enumerate, string>(object, Enumerate, (e) : e is string=>typeof e === "string")).toBe(false);
    });

});


describe('enum more data', () => {

    enum Enumerate {
        DATA = 'DATA',
        VALUE = 'VALUE',
        PROPERTY = 'PROPERTY',
    }

    let object = {
        DATA : 1,
        VALUE : 2,
    };

    it("valid", () => {

        expect(Property<Enumerate, string>(object, Enumerate, (e) : e is string=>true)).toBe(true);
    });



});



describe('object more data', () => {

    enum Enumerate {
        DATA = 'DATA',
        VALUE = 'VALUE',
    }

    let object = {
        DATA : 1,
        VALUE : 2,
        PROPERTY : 3,
    };

    it("invalid", () => {

        expect(Property<Enumerate, string>(object, Enumerate, (e) : e is string=>true)).toBe(false);
    });

});

