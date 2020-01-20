export default function Guard<Enumerate>(value: any, enumerate: Enumerate, error?: (value: any) => Error): Enumerate[keyof Enumerate];
