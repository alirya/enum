import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
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

