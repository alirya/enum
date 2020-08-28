import EnumType from "../../boolean/string/enum";

export default function Enum<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate
) : Error {

    return new Error(EnumType(false, value, enumerate))
}
