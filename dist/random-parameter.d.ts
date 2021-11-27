import Value from "@dikac/t-value/value";
/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export default function RandomParameter<Enumerate extends Record<string, number | string>>({ value, random, }: Value<Enumerate> & {
    random?: () => boolean;
}): Enumerate[keyof Enumerate];
