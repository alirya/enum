/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function Enum<Enumerate extends Record<string, any>>(value: unknown, enumerate: Enumerate, error?: (value: unknown, enumerate: Enumerate) => Error): Enumerate[keyof Enumerate];
