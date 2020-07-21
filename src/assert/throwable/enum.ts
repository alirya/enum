import EnumType from "../../boolean/string/enum";

export default function Enum<Value>(
    value : unknown,
    enumerate : Record<string, Value>
) : Error {

    return new Error(EnumType(false, value, enumerate))
}
