/**
 * convert enumerate to {@see Map}
 * @param value
 */
export default function Map<Value>(value : Record<string, Value>) : Map<string, Value> {

    let map : Map<string, Value> = new globalThis.Map<string, Value>();

    for(let property in value) {

        map.set(property, value[property]);
    }

    return map;
}
