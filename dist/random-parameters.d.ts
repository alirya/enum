/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export default function RandomParameters<Enumerate extends Record<string, number | string>>(enumerate: Enumerate, random?: () => boolean): Enumerate[keyof Enumerate];
