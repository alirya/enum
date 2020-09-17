/**
 * convert enumerate to {@see Map}
 * @param value
 */
export default function Map(value) {
    let map = new globalThis.Map();
    for (let property in value) {
        map.set(property, value[property]);
    }
    return map;
}
//# sourceMappingURL=map.js.map