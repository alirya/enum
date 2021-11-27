/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameters<Enumerate extends Record<string, any>>(value: unknown, enumerate: Enumerate, error?: (value: unknown) => Error): asserts value is Enumerate[keyof Enumerate];
