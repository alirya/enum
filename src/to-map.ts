export default function ToMap<Value>(value : Record<string, Value>) : Map<string, Value> {

    let map : Map<string, Value> = new Map<string, Value>();

    for(let property in value) {

        map.set(property, value[property])
    }

    return map;
}