/**
 * pick multiple enum values
 *
 * @param enumerate
 */
export default function RandomsParameters<Enumerate extends Record<string, number | string>>(enumerate: Enumerate, random?: () => boolean): Enumerate[keyof Enumerate][];
