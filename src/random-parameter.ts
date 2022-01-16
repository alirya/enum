import RandomParameters from './random-parameters';
import Value from '@alirya/value/value';

/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export default function RandomParameter<Enumerate extends Record<string, number|string>>(
    {
        value,
        random,
    } : Value<Enumerate> & {
        random ?: () => boolean
    }
) : Enumerate[keyof Enumerate] {

    return RandomParameters(value, random);
}

