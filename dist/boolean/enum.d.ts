export default function Enum<Enumerate>(value: unknown, enumerate: Enumerate): value is Enumerate[keyof Enumerate];
