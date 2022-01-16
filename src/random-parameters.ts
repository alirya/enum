import RandomBoolean from "@alirya/boolean/random";

/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export default function RandomParameters<Enumerate extends Record<string, number|string>>(
    enumerate : Enumerate,
    random : () => boolean = RandomBoolean
) : Enumerate[keyof Enumerate] {

    let keys : (keyof Enumerate)[] = Object.keys(enumerate);

    while (keys.length > 1) {

        if(random()) {

            keys.shift();
        }
    }

    let key = <keyof Enumerate>keys.shift();


    return enumerate[key];
}

