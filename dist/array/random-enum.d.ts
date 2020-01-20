export default function RandomEnum<Enumerate extends Record<string, number | string>>(enumerate: Enumerate): Enumerate[keyof Enumerate][];
