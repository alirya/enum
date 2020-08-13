/**
 * pick random enum value
 *
 * @param enumerate
 */
export default function Random<Enumerate extends Record<string, number | string>>(enumerate: Enumerate): Enumerate[keyof Enumerate];
