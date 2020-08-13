import RandomBoolean from "@dikac/t-boolean/random";

/**
 * pick random enum value
 *
 * @param enumerate
 */
export default function Random<Enumerate extends Record<string, number|string>>(enumerate : Enumerate) : Enumerate[keyof Enumerate] {

    let keys : (keyof Enumerate)[] = Object.keys(enumerate);

    while (keys.length > 1) {

        if(RandomBoolean()) {

            keys.shift();
        }
    }

    let key = <keyof Enumerate>keys.shift();


    return enumerate[key];
}

