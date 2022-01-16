import Validator from '../../dist/validator/enum-parameters';
import NumberMessage from '../../dist/assert/string/enum-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    enum EnumSpec {
        DATA = 'DATA',
        VALUE = 'VALUE'
    }

    it(`valid value`,function() {

        let validator = Validator(EnumSpec, NumberMessage);
        let validatable = validator(<unknown>EnumSpec.DATA);

        if(validatable.valid) {

            // compiler pass
            let number : EnumSpec = validatable.value;
            expect(number).toBe('DATA');

        } else {

            // @ts-expecerror
            let number : EnumSpec = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validator = Validator(EnumSpec, NumberMessage);
        let validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            let number : EnumSpec = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expecerror
            let number : EnumSpec = validatable.value;
            // @ts-expecerror
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = Validator(EnumSpec, NumberMessage);
        let validatable = validator(EnumSpec.DATA);

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expecerror
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});



describe(`validate value`,function() {

    enum EnumSpec {
        DATA = 'DATA',
        VALUE = 'VALUE'
    }

    it(`valid`,function() {

        let validator = Validator(EnumSpec, NumberMessage);
        let validatable = validator(EnumSpec.DATA);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(EnumSpec.DATA);
        expect(typeof validatable.message).toBe('string');

    });

    it(`invalid`,function() {

        let validator = Validator(EnumSpec, NumberMessage);
        let validatable = validator('a');

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe('a');
        expect(typeof validatable.message).toBe('string');

    });
});



