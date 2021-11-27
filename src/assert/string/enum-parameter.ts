import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EnumParameters from "./enum-parameters";

export default function EnumParameter(
    {
        value,
        valid,
        subject,
        enumerate,
    } : Value<unknown> & Validatable & {
        subject ?: string,
        enumerate ?: string|object,
    }
) : string {

    return EnumParameters(value, valid, enumerate, subject);

}

