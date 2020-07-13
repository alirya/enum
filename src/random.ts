import RandomBoolean from "@dikac/t-boolean/random";

export default function Random<Enumerate extends Record<string, number|string>>(enumerate : Enumerate) : Enumerate[keyof Enumerate] {

    let keys = Object.keys(enumerate);

    while (keys.length > 1) {

        if(RandomBoolean()) {

            keys.shift();
        }
    }

    // @ts-ignore
    return enumerate[<[keyof Enumerate]>keys.shift()];
}

