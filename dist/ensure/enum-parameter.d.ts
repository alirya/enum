/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameter<Enumerate extends Record<string, any>>(value: unknown, { enumerate, error, }: {
    enumerate: Enumerate;
    error?: (value: unknown) => Error;
}): Enumerate[keyof Enumerate];
