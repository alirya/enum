import Random from "@dikac/t-boolean/random";

export default function RandomEnum<Enumerate extends Record<string, number|string>>(enumerate : Enumerate) : Enumerate[keyof Enumerate] {

    let keys = Object.keys(enumerate);

    while (keys.length > 1) {

        if(Random()) {

            keys.shift();
        }
    }

    // @ts-ignore
    return enumerate[<[keyof Enumerate]>keys.shift()];
}

