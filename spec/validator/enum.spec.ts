import Validator from "../../dist/validator/enum";
import NumberMessage from "../../dist/validatable/string/enum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    enum EnumSpec {
        DATA = "DATA",
        VALUE = "VALUE"
    }

    it(`valid value`,function() {

        let validator = new Validator(EnumSpec, NumberMessage);
        let validatable = validator.validate(<unknown>EnumSpec.DATA);

        if(validatable.valid) {

            // compiler pass
            let number : EnumSpec = validatable.value;
            expect(number).toBe("DATA");

        } else {

            // @ts-expect-error
            let number : EnumSpec = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = new Validator(EnumSpec, NumberMessage);
        let validatable = validator.validate({});

        if(validatable.valid) {

            // compiler pass
            let number : EnumSpec = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let number : EnumSpec = validatable.value;
            // @ts-expect-error
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = new Validator(EnumSpec, NumberMessage);
        let validatable = validator.validate(EnumSpec.DATA);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});



describe(`validate value`,function() {

    enum EnumSpec {
        DATA = "DATA",
        VALUE = "VALUE"
    }

    it(`valid`,function() {

        let validator = new Validator(EnumSpec, NumberMessage);
        let validatable = validator.validate(EnumSpec.DATA);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(EnumSpec.DATA);
        expect(typeof validatable.message).toBe("string");

    });

    it(`invalid`,function() {

        let validator = new Validator(EnumSpec, NumberMessage);
        let validatable = validator.validate('a');

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe('a');
        expect(typeof validatable.message).toBe("string");

    });
});



