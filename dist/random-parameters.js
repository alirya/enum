import RandomBoolean from "@dikac/t-boolean/random";
/**
 * pick random enum value
 *
 * @param enumerate
 * @param random
 */
export default function RandomParameters(enumerate, random = RandomBoolean) {
    let keys = Object.keys(enumerate);
    while (keys.length > 1) {
        if (random()) {
            keys.shift();
        }
    }
    let key = keys.shift();
    return enumerate[key];
}
//# sourceMappingURL=random-parameters.js.map