import RandomBoolean from '@alirya/boolean/random.js';
import Enumerate from '../enumerate/enumerate.js';

/**
 * pick multiple enum values
 *
 * @param enumerate
 */
export function RandomsParameters<
    Enumerate extends Record<string, number|string>
>(
    enumerate : Enumerate,
    random : () => boolean = RandomBoolean
) : Enumerate[keyof Enumerate][] {

    const values : Enumerate[(keyof Enumerate)][] = [];

    for (const property in enumerate) {

        if(random()) {

            values.push(enumerate[property]);
        }
    }

    return values;
}

export type RandomsArgument = Enumerate & {
    random ?: () => boolean
};

/**
 * pick multiple enum values
 *
 * @param enumerate
 * @param random
 */
export function RandomsParameter<
    EnumerateType extends Record<string, number|string>
>(
    {
        enumerate,
        random = RandomBoolean,
    } : RandomsArgument
) : EnumerateType[keyof EnumerateType][] {

    return RandomsParameters(enumerate, random);
}


namespace Randoms {
    export const Parameters = RandomsParameters;
    export const Parameter = RandomsParameter;
    export type Argument = RandomsArgument;
}
export default Randoms;
