export default function Type<Enumerate>(value: any, enumerate: Enumerate): value is Enumerate[keyof Enumerate];
