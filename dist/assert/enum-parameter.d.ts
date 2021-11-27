import Enumerate from "../enumerate/enumerate";
/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameter<EnumerateType extends Record<string, any>>(value: unknown, { enumerate, error }: Enumerate & {
    error?: (value: unknown) => Error;
}): asserts value is EnumerateType[keyof EnumerateType];
