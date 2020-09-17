import RandomBoolean from "@dikac/t-boolean/random";
/**
 * pick random enum value
 *
 * @param enumerate
 */
export default function Random(enumerate) {
    let keys = Object.keys(enumerate);
    while (keys.length > 1) {
        if (RandomBoolean()) {
            keys.shift();
        }
    }
    let key = keys.shift();
    return enumerate[key];
}
//# sourceMappingURL=random.js.map