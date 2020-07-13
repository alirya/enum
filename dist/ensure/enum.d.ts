import Function from "@dikac/t-function/function";
export default function Enum<Enumerate>(value: unknown, enumerate: Enumerate, error?: Function<[Enumerate, unknown], Error>): Enumerate[keyof Enumerate];
