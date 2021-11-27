import Value from "@dikac/t-value/value";
import EnumParameters from "./enum-parameters";

export default function EnumParameter(
    {
        value,
        enumerate,
    } : Value & {enumerate : string|Record<string, any>}
) : Error {

    return EnumParameters(value, enumerate);
}
