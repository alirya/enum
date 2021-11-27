import RandomBoolean from "@dikac/t-boolean/random";
/**
 * pick multiple enum values
 *
 * @param enumerate
 */
export default function RandomsParameters(enumerate, random = RandomBoolean) {
    let values = [];
    for (let property in enumerate) {
        if (random()) {
            values.push(enumerate[property]);
        }
    }
    return values;
}
//# sourceMappingURL=randoms-parameters.js.map