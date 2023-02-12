import RandomBoolean from '@alirya/boolean/random.js';
import Value from '@alirya/value/value.js';

/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export function RandomParameters<Enumerate extends Record<string, number|string>>(
    enumerate : Enumerate,
    random : () => boolean = RandomBoolean
) : Enumerate[keyof Enumerate] {

    const keys : (keyof Enumerate)[] = Object.keys(enumerate);

    while (keys.length > 1) {

        if(random()) {

            keys.shift();
        }
    }

    const key = <keyof Enumerate>keys.shift();


    return enumerate[key];
}



/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export function RandomParameter<Enumerate extends Record<string, number|string>>(
    {
        value,
        random,
    } : Value<Enumerate> & {
        random ?: () => boolean
    }
) : Enumerate[keyof Enumerate] {

    return RandomParameters(value, random);
}



namespace Random {
    export const Parameters = RandomParameters;
    export const Parameter = RandomParameter;
}
export default Random;
