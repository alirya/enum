import Random from "@dikac/t-boolean/random";
/**
 * pick multiple enum values
 *
 * @param enumerate
 */
export default function Randoms(enumerate) {
    let values = [];
    for (let property in enumerate) {
        if (Random()) {
            values.push(enumerate[property]);
        }
    }
    return values;
}
//# sourceMappingURL=randoms.js.map