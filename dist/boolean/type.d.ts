export default function Type<ENUMERATE>(value: any, enumerate: ENUMERATE): value is ENUMERATE[keyof ENUMERATE];
