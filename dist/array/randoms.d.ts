export default function Randoms<Enumerate extends Record<string, number | string>>(enumerate: Enumerate): Enumerate[keyof Enumerate][];
