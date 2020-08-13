import Function from "@dikac/t-function/function";
/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function Enum<Enumerate>(value: unknown, enumerate: Enumerate, error?: Function<[Enumerate, unknown], Error>): Enumerate[keyof Enumerate];
