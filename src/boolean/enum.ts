/**
 * check {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 */
export default function Enum<Enumerate>(
    value : unknown,
    enumerate : Enumerate
) : value is Enumerate[keyof Enumerate] {

    for(const data in enumerate) {

        if(value === enumerate[data]) {

            return true;
        }
    }

    return false;

}
