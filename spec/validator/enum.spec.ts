import {EnumParameters} from '../../dist/validator/enum.js';
import NumberMessage from '../../dist/assert/string/enum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    enum EnumSpec {
        DATA = 'DATA',
        VALUE = 'VALUE'
    }

    it(`valid value`,function() {

        const validator = EnumParameters(EnumSpec, NumberMessage.Parameters);
        const validatable = validator(<unknown>EnumSpec.DATA);

        if(validatable.valid) {

            // compiler pass
            const number : EnumSpec = validatable.value;
            expect(number).toBe('DATA');

        } else {

            // @ts-expect-error
            const number : EnumSpec = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validator = EnumParameters(EnumSpec, NumberMessage.Parameters);
        const validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            const number : EnumSpec = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const number : EnumSpec = validatable.value;
            // @ts-expect-error
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        const validator = EnumParameters(EnumSpec, NumberMessage.Parameters);
        const validatable = validator(EnumSpec.DATA);

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
            validatable.message.js = 'message';
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

        const validator = EnumParameters(EnumSpec, NumberMessage.Parameters);
        const validatable = validator(EnumSpec.DATA);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(EnumSpec.DATA);
        expect(typeof validatable.message).toBe('string');

    });

    it(`invalid`,function() {

        const validator = EnumParameters(EnumSpec, NumberMessage.Parameters);
        const validatable = validator('a');

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe('a');
        expect(typeof validatable.message).toBe('string');

    });
});



