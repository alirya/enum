import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EnumParameter from "../../assert/string/enum";
import {Object} from "ts-toolbelt";

/**
 * message for between validation
 */
export default function Enum<
    Enumerate extends object
>(
    instance : Readonly<{enumerate:Enumerate} & Value<unknown|Object.UnionOf<Enumerate>> & Validatable>
) : string {

    return EnumParameter(instance.valid, instance.value, <any>instance.enumerate);

}
