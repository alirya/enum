import EnumType from "../string/enum";

export default function Enum(
    value : unknown,
    enumerate : string = ''
) : Error {

    return new Error(EnumType(false, value, enumerate))
}
