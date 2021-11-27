import Enumerate from "../enumerate/enumerate";
/**
 * pick multiple enum values
 *
 * @param enumerate
 * @param random
 */
export default function RandomsParameter<EnumerateType extends Record<string, number | string>>({ enumerate, random, }: Enumerate & {
    random?: () => boolean;
}): EnumerateType[keyof EnumerateType][];
