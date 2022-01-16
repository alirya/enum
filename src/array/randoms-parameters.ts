import RandomBoolean from '@alirya/boolean/random';

/**
 * pick multiple enum values
 *
 * @param enumerate
 */
export default function RandomsParameters<
    Enumerate extends Record<string, number|string>
>(
    enumerate : Enumerate,
    random : () => boolean = RandomBoolean
) : Enumerate[keyof Enumerate][] {

    let values : Enumerate[(keyof Enumerate)][] = [];

    for (let property in enumerate) {

        if(random()) {

            values.push(enumerate[property]);
        }
    }

    return values;
}

