import Function from "@dikac/t-function/function-single";
export default function Enum<Value, Enumerate extends Record<string, Value>>(valid: boolean, value: unknown, enumerate: Enumerate, valueCast?: Function<unknown, string>, enumerateCast?: Function<Enumerate, string>): string;
