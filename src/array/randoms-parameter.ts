import RandomBoolean from "@dikac/t-boolean/random";
import Enumerate from "../enumerate/enumerate";
import RandomsParameters from "./randoms-parameters";

/**
 * pick multiple enum values
 *
 * @param enumerate
 * @param random
 */
export default function RandomsParameter<
    EnumerateType extends Record<string, number|string>
>(
    {
        enumerate,
        random = RandomBoolean,
    } : Enumerate & {
        random ?: () => boolean
    }
) : EnumerateType[keyof EnumerateType][] {

    return RandomsParameters(enumerate, random);
}

